import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, createToken, getUserId } from '../../utils'

export const auth = {
  /**
   * Get Refresh Token
   */
  async refreshToken(parent, args: { token: string }, ctx: Context, info) {
    const { token } = args
    const userId = getUserId(ctx, token)
    
    return createToken(userId)
  },

  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      success: {
        token: createToken(user.id),
        user,
      }
    }
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      // throw new Error(`No such user found for email: ${email}`)
      return {
        error: {
          field: 'email',
          message: `No such user found for email: ${email}`
        }
      }
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      // throw new Error('Invalid password')
      return {
        error: {
          field: 'password',
          message: `Invalid password`
        }
      }
    }

    return {
      success: {
        token: createToken(user.id),
        user,
      }
    }
  },
}

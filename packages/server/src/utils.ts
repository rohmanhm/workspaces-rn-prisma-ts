import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

/**
 * Create Token
 * 
 * @param userId Given User ID
 * @param expiresTime How long token is valid
 */
export const createToken = (userId: string, expiresTime = '7d') => jwt.sign({ userId }, process.env.APP_SECRET, {
  expiresIn: expiresTime
})

export function getUserId(ctx: Context, jwtToken?: string) {
  let token

  if (!jwtToken) {
    const Authorization = ctx.request.get('Authorization')

    token = Authorization
      ? Authorization.replace('Bearer ', '')
      : undefined
  } else {
    token = jwtToken
  }

  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

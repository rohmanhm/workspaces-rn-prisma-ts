import { Context } from '../../utils'

export const category = {
  categories(parent, args, ctx: Context, info) {
    return ctx.db.query.categories({}, info)
  },

  category(parent, { slug }, ctx: Context, info) {
    return ctx.db.query.category({ where: { slug } }, info)
  },
}

import { getUserId, Context } from '../utils'
// import { post } from './Queries/post';
import { category } from './Queries/category'

export const Query = {
  // ...post,
  ...category,

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    admins: <T = Admin[]>(args: { where?: AdminWhereInput, orderBy?: AdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    carts: <T = Cart[]>(args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Category[]>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vouchers: <T = Voucher[]>(args: { where?: VoucherWhereInput, orderBy?: VoucherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    admin: <T = Admin | null>(args: { where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cart: <T = Cart | null>(args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    voucher: <T = Voucher | null>(args: { where: VoucherWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    adminsConnection: <T = AdminConnection>(args: { where?: AdminWhereInput, orderBy?: AdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartsConnection: <T = CartConnection>(args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vouchersConnection: <T = VoucherConnection>(args: { where?: VoucherWhereInput, orderBy?: VoucherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createAdmin: <T = Admin>(args: { data: AdminCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCart: <T = Cart>(args: { data: CartCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVoucher: <T = Voucher>(args: { data: VoucherCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAdmin: <T = Admin | null>(args: { data: AdminUpdateInput, where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCart: <T = Cart | null>(args: { data: CartUpdateInput, where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateVoucher: <T = Voucher | null>(args: { data: VoucherUpdateInput, where: VoucherWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAdmin: <T = Admin | null>(args: { where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCart: <T = Cart | null>(args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteVoucher: <T = Voucher | null>(args: { where: VoucherWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAdmin: <T = Admin>(args: { where: AdminWhereUniqueInput, create: AdminCreateInput, update: AdminUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCart: <T = Cart>(args: { where: CartWhereUniqueInput, create: CartCreateInput, update: CartUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVoucher: <T = Voucher>(args: { where: VoucherWhereUniqueInput, create: VoucherCreateInput, update: VoucherUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAdmins: <T = BatchPayload>(args: { data: AdminUpdateInput, where?: AdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCarts: <T = BatchPayload>(args: { data: CartUpdateInput, where?: CartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVouchers: <T = BatchPayload>(args: { data: VoucherUpdateInput, where?: VoucherWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAdmins: <T = BatchPayload>(args: { where?: AdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCarts: <T = BatchPayload>(args: { where?: CartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVouchers: <T = BatchPayload>(args: { where?: VoucherWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    admin: <T = AdminSubscriptionPayload | null>(args: { where?: AdminSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    cart: <T = CartSubscriptionPayload | null>(args: { where?: CartSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    voucher: <T = VoucherSubscriptionPayload | null>(args: { where?: VoucherSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Admin: (where?: AdminWhereInput) => Promise<boolean>
  Cart: (where?: CartWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
  Voucher: (where?: VoucherWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Admin implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  role: AdminRole!
  vouchersModerated(where: VoucherWhereInput, orderBy: VoucherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Voucher!]
  productsModerated(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  categoriesModerated(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
}

"""A connection to a list of items."""
type AdminConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

input AdminCreateInput {
  email: String!
  password: String!
  name: String!
  role: AdminRole
  vouchersModerated: VoucherCreateManyWithoutModeratorInput
  productsModerated: ProductCreateManyWithoutModeratorInput
  categoriesModerated: CategoryCreateManyWithoutModeratorInput
}

input AdminCreateOneWithoutCategoriesModeratedInput {
  create: AdminCreateWithoutCategoriesModeratedInput
  connect: AdminWhereUniqueInput
}

input AdminCreateOneWithoutProductsModeratedInput {
  create: AdminCreateWithoutProductsModeratedInput
  connect: AdminWhereUniqueInput
}

input AdminCreateOneWithoutVouchersModeratedInput {
  create: AdminCreateWithoutVouchersModeratedInput
  connect: AdminWhereUniqueInput
}

input AdminCreateWithoutCategoriesModeratedInput {
  email: String!
  password: String!
  name: String!
  role: AdminRole
  vouchersModerated: VoucherCreateManyWithoutModeratorInput
  productsModerated: ProductCreateManyWithoutModeratorInput
}

input AdminCreateWithoutProductsModeratedInput {
  email: String!
  password: String!
  name: String!
  role: AdminRole
  vouchersModerated: VoucherCreateManyWithoutModeratorInput
  categoriesModerated: CategoryCreateManyWithoutModeratorInput
}

input AdminCreateWithoutVouchersModeratedInput {
  email: String!
  password: String!
  name: String!
  role: AdminRole
  productsModerated: ProductCreateManyWithoutModeratorInput
  categoriesModerated: CategoryCreateManyWithoutModeratorInput
}

"""An edge in a connection."""
type AdminEdge {
  """The item at the end of the edge."""
  node: Admin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AdminOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
}

type AdminPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  role: AdminRole!
}

enum AdminRole {
  SUPERADMIN
  MODERATOR
}

type AdminSubscriptionPayload {
  mutation: MutationType!
  node: Admin
  updatedFields: [String!]
  previousValues: AdminPreviousValues
}

input AdminSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AdminWhereInput
}

input AdminUpdateInput {
  email: String
  password: String
  name: String
  role: AdminRole
  vouchersModerated: VoucherUpdateManyWithoutModeratorInput
  productsModerated: ProductUpdateManyWithoutModeratorInput
  categoriesModerated: CategoryUpdateManyWithoutModeratorInput
}

input AdminUpdateOneWithoutCategoriesModeratedInput {
  create: AdminCreateWithoutCategoriesModeratedInput
  connect: AdminWhereUniqueInput
  delete: Boolean
  update: AdminUpdateWithoutCategoriesModeratedDataInput
  upsert: AdminUpsertWithoutCategoriesModeratedInput
}

input AdminUpdateOneWithoutProductsModeratedInput {
  create: AdminCreateWithoutProductsModeratedInput
  connect: AdminWhereUniqueInput
  delete: Boolean
  update: AdminUpdateWithoutProductsModeratedDataInput
  upsert: AdminUpsertWithoutProductsModeratedInput
}

input AdminUpdateOneWithoutVouchersModeratedInput {
  create: AdminCreateWithoutVouchersModeratedInput
  connect: AdminWhereUniqueInput
  delete: Boolean
  update: AdminUpdateWithoutVouchersModeratedDataInput
  upsert: AdminUpsertWithoutVouchersModeratedInput
}

input AdminUpdateWithoutCategoriesModeratedDataInput {
  email: String
  password: String
  name: String
  role: AdminRole
  vouchersModerated: VoucherUpdateManyWithoutModeratorInput
  productsModerated: ProductUpdateManyWithoutModeratorInput
}

input AdminUpdateWithoutProductsModeratedDataInput {
  email: String
  password: String
  name: String
  role: AdminRole
  vouchersModerated: VoucherUpdateManyWithoutModeratorInput
  categoriesModerated: CategoryUpdateManyWithoutModeratorInput
}

input AdminUpdateWithoutVouchersModeratedDataInput {
  email: String
  password: String
  name: String
  role: AdminRole
  productsModerated: ProductUpdateManyWithoutModeratorInput
  categoriesModerated: CategoryUpdateManyWithoutModeratorInput
}

input AdminUpsertWithoutCategoriesModeratedInput {
  update: AdminUpdateWithoutCategoriesModeratedDataInput!
  create: AdminCreateWithoutCategoriesModeratedInput!
}

input AdminUpsertWithoutProductsModeratedInput {
  update: AdminUpdateWithoutProductsModeratedDataInput!
  create: AdminCreateWithoutProductsModeratedInput!
}

input AdminUpsertWithoutVouchersModeratedInput {
  update: AdminUpdateWithoutVouchersModeratedDataInput!
  create: AdminCreateWithoutVouchersModeratedInput!
}

input AdminWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: AdminRole

  """All values that are not equal to given value."""
  role_not: AdminRole

  """All values that are contained in given list."""
  role_in: [AdminRole!]

  """All values that are not contained in given list."""
  role_not_in: [AdminRole!]
  vouchersModerated_every: VoucherWhereInput
  vouchersModerated_some: VoucherWhereInput
  vouchersModerated_none: VoucherWhereInput
  productsModerated_every: ProductWhereInput
  productsModerated_some: ProductWhereInput
  productsModerated_none: ProductWhereInput
  categoriesModerated_every: CategoryWhereInput
  categoriesModerated_some: CategoryWhereInput
  categoriesModerated_none: CategoryWhereInput
}

input AdminWhereUniqueInput {
  id: ID
  email: String
}

type AggregateAdmin {
  count: Int!
}

type AggregateCart {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVoucher {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Cart implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Float!
  isPaid: Boolean!
  user(where: UserWhereInput): User!
  product(where: ProductWhereInput): Product!
}

"""A connection to a list of items."""
type CartConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  quantity: Float!
  isPaid: Boolean
  user: UserCreateOneWithoutCartsInput!
  product: ProductCreateOneWithoutCartsInput!
}

input CartCreateManyWithoutProductInput {
  create: [CartCreateWithoutProductInput!]
  connect: [CartWhereUniqueInput!]
}

input CartCreateManyWithoutUserInput {
  create: [CartCreateWithoutUserInput!]
  connect: [CartWhereUniqueInput!]
}

input CartCreateWithoutProductInput {
  quantity: Float!
  isPaid: Boolean
  user: UserCreateOneWithoutCartsInput!
}

input CartCreateWithoutUserInput {
  quantity: Float!
  isPaid: Boolean
  product: ProductCreateOneWithoutCartsInput!
}

"""An edge in a connection."""
type CartEdge {
  """The item at the end of the edge."""
  node: Cart!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  quantity_ASC
  quantity_DESC
  isPaid_ASC
  isPaid_DESC
}

type CartPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Float!
  isPaid: Boolean!
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartWhereInput
}

input CartUpdateInput {
  quantity: Float
  isPaid: Boolean
  user: UserUpdateOneWithoutCartsInput
  product: ProductUpdateOneWithoutCartsInput
}

input CartUpdateManyWithoutProductInput {
  create: [CartCreateWithoutProductInput!]
  connect: [CartWhereUniqueInput!]
  disconnect: [CartWhereUniqueInput!]
  delete: [CartWhereUniqueInput!]
  update: [CartUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [CartUpsertWithWhereUniqueWithoutProductInput!]
}

input CartUpdateManyWithoutUserInput {
  create: [CartCreateWithoutUserInput!]
  connect: [CartWhereUniqueInput!]
  disconnect: [CartWhereUniqueInput!]
  delete: [CartWhereUniqueInput!]
  update: [CartUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CartUpsertWithWhereUniqueWithoutUserInput!]
}

input CartUpdateWithoutProductDataInput {
  quantity: Float
  isPaid: Boolean
  user: UserUpdateOneWithoutCartsInput
}

input CartUpdateWithoutUserDataInput {
  quantity: Float
  isPaid: Boolean
  product: ProductUpdateOneWithoutCartsInput
}

input CartUpdateWithWhereUniqueWithoutProductInput {
  where: CartWhereUniqueInput!
  data: CartUpdateWithoutProductDataInput!
}

input CartUpdateWithWhereUniqueWithoutUserInput {
  where: CartWhereUniqueInput!
  data: CartUpdateWithoutUserDataInput!
}

input CartUpsertWithWhereUniqueWithoutProductInput {
  where: CartWhereUniqueInput!
  update: CartUpdateWithoutProductDataInput!
  create: CartCreateWithoutProductInput!
}

input CartUpsertWithWhereUniqueWithoutUserInput {
  where: CartWhereUniqueInput!
  update: CartUpdateWithoutUserDataInput!
  create: CartCreateWithoutUserInput!
}

input CartWhereInput {
  """Logical AND on all given filters."""
  AND: [CartWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  quantity: Float

  """All values that are not equal to given value."""
  quantity_not: Float

  """All values that are contained in given list."""
  quantity_in: [Float!]

  """All values that are not contained in given list."""
  quantity_not_in: [Float!]

  """All values less than the given value."""
  quantity_lt: Float

  """All values less than or equal the given value."""
  quantity_lte: Float

  """All values greater than the given value."""
  quantity_gt: Float

  """All values greater than or equal the given value."""
  quantity_gte: Float
  isPaid: Boolean

  """All values that are not equal to given value."""
  isPaid_not: Boolean
  user: UserWhereInput
  product: ProductWhereInput
}

input CartWhereUniqueInput {
  id: ID
}

type Category implements Node {
  id: ID!
  name: String!
  pictureUrl: String!
  description: String
  slug: String!
  moderator(where: AdminWhereInput): Admin!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  pictureUrl: String!
  description: String
  slug: String!
  moderator: AdminCreateOneWithoutCategoriesModeratedInput!
}

input CategoryCreateManyWithoutModeratorInput {
  create: [CategoryCreateWithoutModeratorInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutModeratorInput {
  name: String!
  pictureUrl: String!
  description: String
  slug: String!
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  pictureUrl_ASC
  pictureUrl_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
  pictureUrl: String!
  description: String
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  pictureUrl: String
  description: String
  slug: String
  moderator: AdminUpdateOneWithoutCategoriesModeratedInput
}

input CategoryUpdateManyWithoutModeratorInput {
  create: [CategoryCreateWithoutModeratorInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutModeratorInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutModeratorInput!]
}

input CategoryUpdateWithoutModeratorDataInput {
  name: String
  pictureUrl: String
  description: String
  slug: String
}

input CategoryUpdateWithWhereUniqueWithoutModeratorInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutModeratorDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutModeratorInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutModeratorDataInput!
  create: CategoryCreateWithoutModeratorInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  moderator: AdminWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
  name: String
  slug: String
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createAdmin(data: AdminCreateInput!): Admin!
  createCart(data: CartCreateInput!): Cart!
  createCategory(data: CategoryCreateInput!): Category!
  createProduct(data: ProductCreateInput!): Product!
  createVoucher(data: VoucherCreateInput!): Voucher!
  createUser(data: UserCreateInput!): User!
  updateAdmin(data: AdminUpdateInput!, where: AdminWhereUniqueInput!): Admin
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateVoucher(data: VoucherUpdateInput!, where: VoucherWhereUniqueInput!): Voucher
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteAdmin(where: AdminWhereUniqueInput!): Admin
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteVoucher(where: VoucherWhereUniqueInput!): Voucher
  deleteUser(where: UserWhereUniqueInput!): User
  upsertAdmin(where: AdminWhereUniqueInput!, create: AdminCreateInput!, update: AdminUpdateInput!): Admin!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertVoucher(where: VoucherWhereUniqueInput!, create: VoucherCreateInput!, update: VoucherUpdateInput!): Voucher!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyAdmins(data: AdminUpdateInput!, where: AdminWhereInput): BatchPayload!
  updateManyCarts(data: CartUpdateInput!, where: CartWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyVouchers(data: VoucherUpdateInput!, where: VoucherWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyAdmins(where: AdminWhereInput): BatchPayload!
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyVouchers(where: VoucherWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  basePrice: Float
  description: String
  type: ProductType!
  moderator(where: AdminWhereInput): Admin!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  price: Float!
  basePrice: Float
  description: String
  type: ProductType
  moderator: AdminCreateOneWithoutProductsModeratedInput!
  carts: CartCreateManyWithoutProductInput
}

input ProductCreateManyWithoutModeratorInput {
  create: [ProductCreateWithoutModeratorInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneWithoutCartsInput {
  create: ProductCreateWithoutCartsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutCartsInput {
  name: String!
  price: Float!
  basePrice: Float
  description: String
  type: ProductType
  moderator: AdminCreateOneWithoutProductsModeratedInput!
}

input ProductCreateWithoutModeratorInput {
  name: String!
  price: Float!
  basePrice: Float
  description: String
  type: ProductType
  carts: CartCreateManyWithoutProductInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  basePrice_ASC
  basePrice_DESC
  description_ASC
  description_DESC
  type_ASC
  type_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  basePrice: Float
  description: String
  type: ProductType!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

enum ProductType {
  PRODUCT
  VOUCHER
  BALANCE
}

input ProductUpdateInput {
  name: String
  price: Float
  basePrice: Float
  description: String
  type: ProductType
  moderator: AdminUpdateOneWithoutProductsModeratedInput
  carts: CartUpdateManyWithoutProductInput
}

input ProductUpdateManyWithoutModeratorInput {
  create: [ProductCreateWithoutModeratorInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutModeratorInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutModeratorInput!]
}

input ProductUpdateOneWithoutCartsInput {
  create: ProductCreateWithoutCartsInput
  connect: ProductWhereUniqueInput
  delete: Boolean
  update: ProductUpdateWithoutCartsDataInput
  upsert: ProductUpsertWithoutCartsInput
}

input ProductUpdateWithoutCartsDataInput {
  name: String
  price: Float
  basePrice: Float
  description: String
  type: ProductType
  moderator: AdminUpdateOneWithoutProductsModeratedInput
}

input ProductUpdateWithoutModeratorDataInput {
  name: String
  price: Float
  basePrice: Float
  description: String
  type: ProductType
  carts: CartUpdateManyWithoutProductInput
}

input ProductUpdateWithWhereUniqueWithoutModeratorInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutModeratorDataInput!
}

input ProductUpsertWithoutCartsInput {
  update: ProductUpdateWithoutCartsDataInput!
  create: ProductCreateWithoutCartsInput!
}

input ProductUpsertWithWhereUniqueWithoutModeratorInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutModeratorDataInput!
  create: ProductCreateWithoutModeratorInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  basePrice: Float

  """All values that are not equal to given value."""
  basePrice_not: Float

  """All values that are contained in given list."""
  basePrice_in: [Float!]

  """All values that are not contained in given list."""
  basePrice_not_in: [Float!]

  """All values less than the given value."""
  basePrice_lt: Float

  """All values less than or equal the given value."""
  basePrice_lte: Float

  """All values greater than the given value."""
  basePrice_gt: Float

  """All values greater than or equal the given value."""
  basePrice_gte: Float
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  type: ProductType

  """All values that are not equal to given value."""
  type_not: ProductType

  """All values that are contained in given list."""
  type_in: [ProductType!]

  """All values that are not contained in given list."""
  type_not_in: [ProductType!]
  moderator: AdminWhereInput
  carts_every: CartWhereInput
  carts_some: CartWhereInput
  carts_none: CartWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  vouchers(where: VoucherWhereInput, orderBy: VoucherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Voucher]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  admin(where: AdminWhereUniqueInput!): Admin
  cart(where: CartWhereUniqueInput!): Cart
  category(where: CategoryWhereUniqueInput!): Category
  product(where: ProductWhereUniqueInput!): Product
  voucher(where: VoucherWhereUniqueInput!): Voucher
  user(where: UserWhereUniqueInput!): User
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  vouchersConnection(where: VoucherWhereInput, orderBy: VoucherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoucherConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  voucher(where: VoucherSubscriptionWhereInput): VoucherSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  carts: CartCreateManyWithoutUserInput
}

input UserCreateOneWithoutCartsInput {
  create: UserCreateWithoutCartsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCartsInput {
  email: String!
  password: String!
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  carts: CartUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutCartsInput {
  create: UserCreateWithoutCartsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCartsDataInput
  upsert: UserUpsertWithoutCartsInput
}

input UserUpdateWithoutCartsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutCartsInput {
  update: UserUpdateWithoutCartsDataInput!
  create: UserCreateWithoutCartsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  carts_every: CartWhereInput
  carts_some: CartWhereInput
  carts_none: CartWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Voucher implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  code: String!
  serial: String
  isSold: Boolean!
  basePrice: Float!
  soldPrice: Float
  moderator(where: AdminWhereInput): Admin!
}

"""A connection to a list of items."""
type VoucherConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VoucherEdge]!
  aggregate: AggregateVoucher!
}

input VoucherCreateInput {
  code: String!
  serial: String
  isSold: Boolean
  basePrice: Float!
  soldPrice: Float
  moderator: AdminCreateOneWithoutVouchersModeratedInput!
}

input VoucherCreateManyWithoutModeratorInput {
  create: [VoucherCreateWithoutModeratorInput!]
  connect: [VoucherWhereUniqueInput!]
}

input VoucherCreateWithoutModeratorInput {
  code: String!
  serial: String
  isSold: Boolean
  basePrice: Float!
  soldPrice: Float
}

"""An edge in a connection."""
type VoucherEdge {
  """The item at the end of the edge."""
  node: Voucher!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VoucherOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  code_ASC
  code_DESC
  serial_ASC
  serial_DESC
  isSold_ASC
  isSold_DESC
  basePrice_ASC
  basePrice_DESC
  soldPrice_ASC
  soldPrice_DESC
}

type VoucherPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  code: String!
  serial: String
  isSold: Boolean!
  basePrice: Float!
  soldPrice: Float
}

type VoucherSubscriptionPayload {
  mutation: MutationType!
  node: Voucher
  updatedFields: [String!]
  previousValues: VoucherPreviousValues
}

input VoucherSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VoucherSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoucherSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoucherSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VoucherWhereInput
}

input VoucherUpdateInput {
  code: String
  serial: String
  isSold: Boolean
  basePrice: Float
  soldPrice: Float
  moderator: AdminUpdateOneWithoutVouchersModeratedInput
}

input VoucherUpdateManyWithoutModeratorInput {
  create: [VoucherCreateWithoutModeratorInput!]
  connect: [VoucherWhereUniqueInput!]
  disconnect: [VoucherWhereUniqueInput!]
  delete: [VoucherWhereUniqueInput!]
  update: [VoucherUpdateWithWhereUniqueWithoutModeratorInput!]
  upsert: [VoucherUpsertWithWhereUniqueWithoutModeratorInput!]
}

input VoucherUpdateWithoutModeratorDataInput {
  code: String
  serial: String
  isSold: Boolean
  basePrice: Float
  soldPrice: Float
}

input VoucherUpdateWithWhereUniqueWithoutModeratorInput {
  where: VoucherWhereUniqueInput!
  data: VoucherUpdateWithoutModeratorDataInput!
}

input VoucherUpsertWithWhereUniqueWithoutModeratorInput {
  where: VoucherWhereUniqueInput!
  update: VoucherUpdateWithoutModeratorDataInput!
  create: VoucherCreateWithoutModeratorInput!
}

input VoucherWhereInput {
  """Logical AND on all given filters."""
  AND: [VoucherWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoucherWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoucherWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  serial: String

  """All values that are not equal to given value."""
  serial_not: String

  """All values that are contained in given list."""
  serial_in: [String!]

  """All values that are not contained in given list."""
  serial_not_in: [String!]

  """All values less than the given value."""
  serial_lt: String

  """All values less than or equal the given value."""
  serial_lte: String

  """All values greater than the given value."""
  serial_gt: String

  """All values greater than or equal the given value."""
  serial_gte: String

  """All values containing the given string."""
  serial_contains: String

  """All values not containing the given string."""
  serial_not_contains: String

  """All values starting with the given string."""
  serial_starts_with: String

  """All values not starting with the given string."""
  serial_not_starts_with: String

  """All values ending with the given string."""
  serial_ends_with: String

  """All values not ending with the given string."""
  serial_not_ends_with: String
  isSold: Boolean

  """All values that are not equal to given value."""
  isSold_not: Boolean
  basePrice: Float

  """All values that are not equal to given value."""
  basePrice_not: Float

  """All values that are contained in given list."""
  basePrice_in: [Float!]

  """All values that are not contained in given list."""
  basePrice_not_in: [Float!]

  """All values less than the given value."""
  basePrice_lt: Float

  """All values less than or equal the given value."""
  basePrice_lte: Float

  """All values greater than the given value."""
  basePrice_gt: Float

  """All values greater than or equal the given value."""
  basePrice_gte: Float
  soldPrice: Float

  """All values that are not equal to given value."""
  soldPrice_not: Float

  """All values that are contained in given list."""
  soldPrice_in: [Float!]

  """All values that are not contained in given list."""
  soldPrice_not_in: [Float!]

  """All values less than the given value."""
  soldPrice_lt: Float

  """All values less than or equal the given value."""
  soldPrice_lte: Float

  """All values greater than the given value."""
  soldPrice_gt: Float

  """All values greater than or equal the given value."""
  soldPrice_gte: Float
  moderator: AdminWhereInput
}

input VoucherWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AdminOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'role_ASC' |
  'role_DESC'

export type ProductType =   'PRODUCT' |
  'VOUCHER' |
  'BALANCE'

export type VoucherOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'code_ASC' |
  'code_DESC' |
  'serial_ASC' |
  'serial_DESC' |
  'isSold_ASC' |
  'isSold_DESC' |
  'basePrice_ASC' |
  'basePrice_DESC' |
  'soldPrice_ASC' |
  'soldPrice_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'basePrice_ASC' |
  'basePrice_DESC' |
  'description_ASC' |
  'description_DESC' |
  'type_ASC' |
  'type_DESC'

export type CartOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'isPaid_ASC' |
  'isPaid_DESC'

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'pictureUrl_ASC' |
  'pictureUrl_DESC' |
  'description_ASC' |
  'description_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type AdminRole =   'SUPERADMIN' |
  'MODERATOR'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface AdminCreateWithoutCategoriesModeratedInput {
  email: String
  password: String
  name: String
  role?: AdminRole
  vouchersModerated?: VoucherCreateManyWithoutModeratorInput
  productsModerated?: ProductCreateManyWithoutModeratorInput
}

export interface AdminWhereInput {
  AND?: AdminWhereInput[] | AdminWhereInput
  OR?: AdminWhereInput[] | AdminWhereInput
  NOT?: AdminWhereInput[] | AdminWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  role?: AdminRole
  role_not?: AdminRole
  role_in?: AdminRole[] | AdminRole
  role_not_in?: AdminRole[] | AdminRole
  vouchersModerated_every?: VoucherWhereInput
  vouchersModerated_some?: VoucherWhereInput
  vouchersModerated_none?: VoucherWhereInput
  productsModerated_every?: ProductWhereInput
  productsModerated_some?: ProductWhereInput
  productsModerated_none?: ProductWhereInput
  categoriesModerated_every?: CategoryWhereInput
  categoriesModerated_some?: CategoryWhereInput
  categoriesModerated_none?: CategoryWhereInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  carts?: CartCreateManyWithoutUserInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  carts_every?: CartWhereInput
  carts_some?: CartWhereInput
  carts_none?: CartWhereInput
}

export interface CartCreateManyWithoutUserInput {
  create?: CartCreateWithoutUserInput[] | CartCreateWithoutUserInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
}

export interface CartWhereInput {
  AND?: CartWhereInput[] | CartWhereInput
  OR?: CartWhereInput[] | CartWhereInput
  NOT?: CartWhereInput[] | CartWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  quantity?: Float
  quantity_not?: Float
  quantity_in?: Float[] | Float
  quantity_not_in?: Float[] | Float
  quantity_lt?: Float
  quantity_lte?: Float
  quantity_gt?: Float
  quantity_gte?: Float
  isPaid?: Boolean
  isPaid_not?: Boolean
  user?: UserWhereInput
  product?: ProductWhereInput
}

export interface ProductCreateWithoutModeratorInput {
  name: String
  price: Float
  basePrice?: Float
  description?: String
  type?: ProductType
  carts?: CartCreateManyWithoutProductInput
}

export interface CategoryUpdateWithWhereUniqueWithoutModeratorInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutModeratorDataInput
}

export interface CartCreateManyWithoutProductInput {
  create?: CartCreateWithoutProductInput[] | CartCreateWithoutProductInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
}

export interface CartCreateWithoutUserInput {
  quantity: Float
  isPaid?: Boolean
  product: ProductCreateOneWithoutCartsInput
}

export interface CartCreateWithoutProductInput {
  quantity: Float
  isPaid?: Boolean
  user: UserCreateOneWithoutCartsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateOneWithoutCartsInput {
  create?: UserCreateWithoutCartsInput
  connect?: UserWhereUniqueInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface UserCreateWithoutCartsInput {
  email: String
  password: String
  name: String
}

export interface CartSubscriptionWhereInput {
  AND?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  OR?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  NOT?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartWhereInput
}

export interface CategoryCreateManyWithoutModeratorInput {
  create?: CategoryCreateWithoutModeratorInput[] | CategoryCreateWithoutModeratorInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
}

export interface VoucherWhereInput {
  AND?: VoucherWhereInput[] | VoucherWhereInput
  OR?: VoucherWhereInput[] | VoucherWhereInput
  NOT?: VoucherWhereInput[] | VoucherWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
  serial?: String
  serial_not?: String
  serial_in?: String[] | String
  serial_not_in?: String[] | String
  serial_lt?: String
  serial_lte?: String
  serial_gt?: String
  serial_gte?: String
  serial_contains?: String
  serial_not_contains?: String
  serial_starts_with?: String
  serial_not_starts_with?: String
  serial_ends_with?: String
  serial_not_ends_with?: String
  isSold?: Boolean
  isSold_not?: Boolean
  basePrice?: Float
  basePrice_not?: Float
  basePrice_in?: Float[] | Float
  basePrice_not_in?: Float[] | Float
  basePrice_lt?: Float
  basePrice_lte?: Float
  basePrice_gt?: Float
  basePrice_gte?: Float
  soldPrice?: Float
  soldPrice_not?: Float
  soldPrice_in?: Float[] | Float
  soldPrice_not_in?: Float[] | Float
  soldPrice_lt?: Float
  soldPrice_lte?: Float
  soldPrice_gt?: Float
  soldPrice_gte?: Float
  moderator?: AdminWhereInput
}

export interface CategoryCreateWithoutModeratorInput {
  name: String
  pictureUrl: String
  description?: String
  slug: String
}

export interface CartUpdateWithoutUserDataInput {
  quantity?: Float
  isPaid?: Boolean
  product?: ProductUpdateOneWithoutCartsInput
}

export interface CartCreateInput {
  quantity: Float
  isPaid?: Boolean
  user: UserCreateOneWithoutCartsInput
  product: ProductCreateOneWithoutCartsInput
}

export interface CartWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateOneWithoutCartsInput {
  create?: ProductCreateWithoutCartsInput
  connect?: ProductWhereUniqueInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateWithoutCartsInput {
  name: String
  price: Float
  basePrice?: Float
  description?: String
  type?: ProductType
  moderator: AdminCreateOneWithoutProductsModeratedInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface AdminCreateOneWithoutProductsModeratedInput {
  create?: AdminCreateWithoutProductsModeratedInput
  connect?: AdminWhereUniqueInput
}

export interface CartUpdateManyWithoutUserInput {
  create?: CartCreateWithoutUserInput[] | CartCreateWithoutUserInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  disconnect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  delete?: CartWhereUniqueInput[] | CartWhereUniqueInput
  update?: CartUpdateWithWhereUniqueWithoutUserInput[] | CartUpdateWithWhereUniqueWithoutUserInput
  upsert?: CartUpsertWithWhereUniqueWithoutUserInput[] | CartUpsertWithWhereUniqueWithoutUserInput
}

export interface AdminCreateWithoutProductsModeratedInput {
  email: String
  password: String
  name: String
  role?: AdminRole
  vouchersModerated?: VoucherCreateManyWithoutModeratorInput
  categoriesModerated?: CategoryCreateManyWithoutModeratorInput
}

export interface AdminUpsertWithoutVouchersModeratedInput {
  update: AdminUpdateWithoutVouchersModeratedDataInput
  create: AdminCreateWithoutVouchersModeratedInput
}

export interface CategoryCreateInput {
  name: String
  pictureUrl: String
  description?: String
  slug: String
  moderator: AdminCreateOneWithoutCategoriesModeratedInput
}

export interface AdminUpdateOneWithoutVouchersModeratedInput {
  create?: AdminCreateWithoutVouchersModeratedInput
  connect?: AdminWhereUniqueInput
  delete?: Boolean
  update?: AdminUpdateWithoutVouchersModeratedDataInput
  upsert?: AdminUpsertWithoutVouchersModeratedInput
}

export interface AdminCreateOneWithoutCategoriesModeratedInput {
  create?: AdminCreateWithoutCategoriesModeratedInput
  connect?: AdminWhereUniqueInput
}

export interface ProductUpdateInput {
  name?: String
  price?: Float
  basePrice?: Float
  description?: String
  type?: ProductType
  moderator?: AdminUpdateOneWithoutProductsModeratedInput
  carts?: CartUpdateManyWithoutProductInput
}

export interface CategoryUpsertWithWhereUniqueWithoutModeratorInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutModeratorDataInput
  create: CategoryCreateWithoutModeratorInput
}

export interface AdminUpdateWithoutCategoriesModeratedDataInput {
  email?: String
  password?: String
  name?: String
  role?: AdminRole
  vouchersModerated?: VoucherUpdateManyWithoutModeratorInput
  productsModerated?: ProductUpdateManyWithoutModeratorInput
}

export interface ProductCreateInput {
  name: String
  price: Float
  basePrice?: Float
  description?: String
  type?: ProductType
  moderator: AdminCreateOneWithoutProductsModeratedInput
  carts?: CartCreateManyWithoutProductInput
}

export interface CategoryUpdateInput {
  name?: String
  pictureUrl?: String
  description?: String
  slug?: String
  moderator?: AdminUpdateOneWithoutCategoriesModeratedInput
}

export interface VoucherCreateInput {
  code: String
  serial?: String
  isSold?: Boolean
  basePrice: Float
  soldPrice?: Float
  moderator: AdminCreateOneWithoutVouchersModeratedInput
}

export interface AdminUpsertWithoutProductsModeratedInput {
  update: AdminUpdateWithoutProductsModeratedDataInput
  create: AdminCreateWithoutProductsModeratedInput
}

export interface AdminCreateOneWithoutVouchersModeratedInput {
  create?: AdminCreateWithoutVouchersModeratedInput
  connect?: AdminWhereUniqueInput
}

export interface AdminUpdateOneWithoutProductsModeratedInput {
  create?: AdminCreateWithoutProductsModeratedInput
  connect?: AdminWhereUniqueInput
  delete?: Boolean
  update?: AdminUpdateWithoutProductsModeratedDataInput
  upsert?: AdminUpsertWithoutProductsModeratedInput
}

export interface AdminCreateWithoutVouchersModeratedInput {
  email: String
  password: String
  name: String
  role?: AdminRole
  productsModerated?: ProductCreateManyWithoutModeratorInput
  categoriesModerated?: CategoryCreateManyWithoutModeratorInput
}

export interface ProductUpdateOneWithoutCartsInput {
  create?: ProductCreateWithoutCartsInput
  connect?: ProductWhereUniqueInput
  delete?: Boolean
  update?: ProductUpdateWithoutCartsDataInput
  upsert?: ProductUpsertWithoutCartsInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  pictureUrl?: String
  pictureUrl_not?: String
  pictureUrl_in?: String[] | String
  pictureUrl_not_in?: String[] | String
  pictureUrl_lt?: String
  pictureUrl_lte?: String
  pictureUrl_gt?: String
  pictureUrl_gte?: String
  pictureUrl_contains?: String
  pictureUrl_not_contains?: String
  pictureUrl_starts_with?: String
  pictureUrl_not_starts_with?: String
  pictureUrl_ends_with?: String
  pictureUrl_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  moderator?: AdminWhereInput
}

export interface AdminCreateInput {
  email: String
  password: String
  name: String
  role?: AdminRole
  vouchersModerated?: VoucherCreateManyWithoutModeratorInput
  productsModerated?: ProductCreateManyWithoutModeratorInput
  categoriesModerated?: CategoryCreateManyWithoutModeratorInput
}

export interface CategoryUpdateWithoutModeratorDataInput {
  name?: String
  pictureUrl?: String
  description?: String
  slug?: String
}

export interface VoucherCreateWithoutModeratorInput {
  code: String
  serial?: String
  isSold?: Boolean
  basePrice: Float
  soldPrice?: Float
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  basePrice?: Float
  basePrice_not?: Float
  basePrice_in?: Float[] | Float
  basePrice_not_in?: Float[] | Float
  basePrice_lt?: Float
  basePrice_lte?: Float
  basePrice_gt?: Float
  basePrice_gte?: Float
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  type?: ProductType
  type_not?: ProductType
  type_in?: ProductType[] | ProductType
  type_not_in?: ProductType[] | ProductType
  moderator?: AdminWhereInput
  carts_every?: CartWhereInput
  carts_some?: CartWhereInput
  carts_none?: CartWhereInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface AdminUpdateInput {
  email?: String
  password?: String
  name?: String
  role?: AdminRole
  vouchersModerated?: VoucherUpdateManyWithoutModeratorInput
  productsModerated?: ProductUpdateManyWithoutModeratorInput
  categoriesModerated?: CategoryUpdateManyWithoutModeratorInput
}

export interface CartUpsertWithWhereUniqueWithoutUserInput {
  where: CartWhereUniqueInput
  update: CartUpdateWithoutUserDataInput
  create: CartCreateWithoutUserInput
}

export interface VoucherUpdateManyWithoutModeratorInput {
  create?: VoucherCreateWithoutModeratorInput[] | VoucherCreateWithoutModeratorInput
  connect?: VoucherWhereUniqueInput[] | VoucherWhereUniqueInput
  disconnect?: VoucherWhereUniqueInput[] | VoucherWhereUniqueInput
  delete?: VoucherWhereUniqueInput[] | VoucherWhereUniqueInput
  update?: VoucherUpdateWithWhereUniqueWithoutModeratorInput[] | VoucherUpdateWithWhereUniqueWithoutModeratorInput
  upsert?: VoucherUpsertWithWhereUniqueWithoutModeratorInput[] | VoucherUpsertWithWhereUniqueWithoutModeratorInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
  name?: String
  slug?: String
}

export interface VoucherUpdateWithWhereUniqueWithoutModeratorInput {
  where: VoucherWhereUniqueInput
  data: VoucherUpdateWithoutModeratorDataInput
}

export interface CartUpdateWithWhereUniqueWithoutUserInput {
  where: CartWhereUniqueInput
  data: CartUpdateWithoutUserDataInput
}

export interface VoucherUpdateWithoutModeratorDataInput {
  code?: String
  serial?: String
  isSold?: Boolean
  basePrice?: Float
  soldPrice?: Float
}

export interface AdminUpdateWithoutVouchersModeratedDataInput {
  email?: String
  password?: String
  name?: String
  role?: AdminRole
  productsModerated?: ProductUpdateManyWithoutModeratorInput
  categoriesModerated?: CategoryUpdateManyWithoutModeratorInput
}

export interface VoucherUpsertWithWhereUniqueWithoutModeratorInput {
  where: VoucherWhereUniqueInput
  update: VoucherUpdateWithoutModeratorDataInput
  create: VoucherCreateWithoutModeratorInput
}

export interface AdminUpsertWithoutCategoriesModeratedInput {
  update: AdminUpdateWithoutCategoriesModeratedDataInput
  create: AdminCreateWithoutCategoriesModeratedInput
}

export interface ProductUpdateManyWithoutModeratorInput {
  create?: ProductCreateWithoutModeratorInput[] | ProductCreateWithoutModeratorInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutModeratorInput[] | ProductUpdateWithWhereUniqueWithoutModeratorInput
  upsert?: ProductUpsertWithWhereUniqueWithoutModeratorInput[] | ProductUpsertWithWhereUniqueWithoutModeratorInput
}

export interface ProductUpsertWithoutCartsInput {
  update: ProductUpdateWithoutCartsDataInput
  create: ProductCreateWithoutCartsInput
}

export interface ProductUpdateWithWhereUniqueWithoutModeratorInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutModeratorDataInput
}

export interface ProductUpdateWithoutCartsDataInput {
  name?: String
  price?: Float
  basePrice?: Float
  description?: String
  type?: ProductType
  moderator?: AdminUpdateOneWithoutProductsModeratedInput
}

export interface ProductUpdateWithoutModeratorDataInput {
  name?: String
  price?: Float
  basePrice?: Float
  description?: String
  type?: ProductType
  carts?: CartUpdateManyWithoutProductInput
}

export interface VoucherCreateManyWithoutModeratorInput {
  create?: VoucherCreateWithoutModeratorInput[] | VoucherCreateWithoutModeratorInput
  connect?: VoucherWhereUniqueInput[] | VoucherWhereUniqueInput
}

export interface CartUpdateManyWithoutProductInput {
  create?: CartCreateWithoutProductInput[] | CartCreateWithoutProductInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  disconnect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  delete?: CartWhereUniqueInput[] | CartWhereUniqueInput
  update?: CartUpdateWithWhereUniqueWithoutProductInput[] | CartUpdateWithWhereUniqueWithoutProductInput
  upsert?: CartUpsertWithWhereUniqueWithoutProductInput[] | CartUpsertWithWhereUniqueWithoutProductInput
}

export interface VoucherSubscriptionWhereInput {
  AND?: VoucherSubscriptionWhereInput[] | VoucherSubscriptionWhereInput
  OR?: VoucherSubscriptionWhereInput[] | VoucherSubscriptionWhereInput
  NOT?: VoucherSubscriptionWhereInput[] | VoucherSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VoucherWhereInput
}

export interface CartUpdateWithWhereUniqueWithoutProductInput {
  where: CartWhereUniqueInput
  data: CartUpdateWithoutProductDataInput
}

export interface AdminWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface CartUpdateWithoutProductDataInput {
  quantity?: Float
  isPaid?: Boolean
  user?: UserUpdateOneWithoutCartsInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  carts?: CartUpdateManyWithoutUserInput
}

export interface UserUpdateOneWithoutCartsInput {
  create?: UserCreateWithoutCartsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutCartsDataInput
  upsert?: UserUpsertWithoutCartsInput
}

export interface AdminUpdateOneWithoutCategoriesModeratedInput {
  create?: AdminCreateWithoutCategoriesModeratedInput
  connect?: AdminWhereUniqueInput
  delete?: Boolean
  update?: AdminUpdateWithoutCategoriesModeratedDataInput
  upsert?: AdminUpsertWithoutCategoriesModeratedInput
}

export interface UserUpdateWithoutCartsDataInput {
  email?: String
  password?: String
  name?: String
}

export interface CartUpdateInput {
  quantity?: Float
  isPaid?: Boolean
  user?: UserUpdateOneWithoutCartsInput
  product?: ProductUpdateOneWithoutCartsInput
}

export interface CategoryUpdateManyWithoutModeratorInput {
  create?: CategoryCreateWithoutModeratorInput[] | CategoryCreateWithoutModeratorInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  disconnect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  delete?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  update?: CategoryUpdateWithWhereUniqueWithoutModeratorInput[] | CategoryUpdateWithWhereUniqueWithoutModeratorInput
  upsert?: CategoryUpsertWithWhereUniqueWithoutModeratorInput[] | CategoryUpsertWithWhereUniqueWithoutModeratorInput
}

export interface ProductUpsertWithWhereUniqueWithoutModeratorInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutModeratorDataInput
  create: ProductCreateWithoutModeratorInput
}

export interface CartUpsertWithWhereUniqueWithoutProductInput {
  where: CartWhereUniqueInput
  update: CartUpdateWithoutProductDataInput
  create: CartCreateWithoutProductInput
}

export interface UserUpsertWithoutCartsInput {
  update: UserUpdateWithoutCartsDataInput
  create: UserCreateWithoutCartsInput
}

export interface ProductCreateManyWithoutModeratorInput {
  create?: ProductCreateWithoutModeratorInput[] | ProductCreateWithoutModeratorInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface AdminUpdateWithoutProductsModeratedDataInput {
  email?: String
  password?: String
  name?: String
  role?: AdminRole
  vouchersModerated?: VoucherUpdateManyWithoutModeratorInput
  categoriesModerated?: CategoryUpdateManyWithoutModeratorInput
}

export interface VoucherUpdateInput {
  code?: String
  serial?: String
  isSold?: Boolean
  basePrice?: Float
  soldPrice?: Float
  moderator?: AdminUpdateOneWithoutVouchersModeratedInput
}

export interface VoucherWhereUniqueInput {
  id?: ID_Input
}

export interface AdminSubscriptionWhereInput {
  AND?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  OR?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  NOT?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AdminWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Category extends Node {
  id: ID_Output
  name: String
  pictureUrl: String
  description?: String
  slug: String
  moderator: Admin
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Admin extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
  role: AdminRole
  vouchersModerated?: Voucher[]
  productsModerated?: Product[]
  categoriesModerated?: Category[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateUser {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  basePrice?: Float
  description?: String
  type: ProductType
}

export interface Voucher extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  code: String
  serial?: String
  isSold: Boolean
  basePrice: Float
  soldPrice?: Float
  moderator: Admin
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface VoucherConnection {
  pageInfo: PageInfo
  edges: VoucherEdge[]
  aggregate: AggregateVoucher
}

export interface AggregateVoucher {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  createdAt: DateTime
  updatedAt: DateTime
  carts?: Cart[]
}

export interface AggregateCategory {
  count: Int
}

export interface VoucherPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  code: String
  serial?: String
  isSold: Boolean
  basePrice: Float
  soldPrice?: Float
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

export interface AdminSubscriptionPayload {
  mutation: MutationType
  node?: Admin
  updatedFields?: String[]
  previousValues?: AdminPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CartEdge {
  node: Cart
  cursor: String
}

export interface AdminPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
  role: AdminRole
}

export interface AggregateAdmin {
  count: Int
}

export interface Cart extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  quantity: Float
  isPaid: Boolean
  user: User
  product: Product
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface CartSubscriptionPayload {
  mutation: MutationType
  node?: Cart
  updatedFields?: String[]
  previousValues?: CartPreviousValues
}

/*
 * An edge in a connection.

 */
export interface VoucherEdge {
  node: Voucher
  cursor: String
}

export interface CartPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  quantity: Float
  isPaid: Boolean
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface VoucherSubscriptionPayload {
  mutation: MutationType
  node?: Voucher
  updatedFields?: String[]
  previousValues?: VoucherPreviousValues
}

export interface AggregateCart {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AdminEdge {
  node: Admin
  cursor: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  basePrice?: Float
  description?: String
  type: ProductType
  moderator: Admin
  carts?: Cart[]
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
  pictureUrl: String
  description?: String
  slug: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AdminConnection {
  pageInfo: PageInfo
  edges: AdminEdge[]
  aggregate: AggregateAdmin
}

/*
 * A connection to a list of items.

 */
export interface CartConnection {
  pageInfo: PageInfo
  edges: CartEdge[]
  aggregate: AggregateCart
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface AggregateProduct {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number
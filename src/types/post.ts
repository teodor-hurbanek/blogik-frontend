export type Post = {
  data: PostData[]
  meta: PostMeta
}

export type PostMeta = {
  pagination: PostPagination
}

export type PostPagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type PostData = {
  id: number
  attributes: PostAttributes
}

export type PostAttributes = {
  title: string
  slug: string
  content: string
  picture: string[]
  createdAt: Date
  updatedAt: Date
}

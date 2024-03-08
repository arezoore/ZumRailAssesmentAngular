export type getPostsParamsType = {
    tags: string,
    sortBy?: 'id' | 'reads' | 'likes' | 'popularity',
    direction?: 'asc' | 'desc'
}

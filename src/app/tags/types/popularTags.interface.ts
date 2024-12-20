export type TagsListType = string[] | null | string

export interface PopularTagsStateInterface {
  isLoading: boolean
  isErrors: string | null
  popularTags: TagsListType
}

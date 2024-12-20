import {ArticleInterface} from '../../shared/types/article.interface'

export interface FeedInterface {
  articles: ArticleInterface[]
  articlesCount: number
  popularTags?: PopularTagsType
}

export type PopularTagsType = string[] | null | string

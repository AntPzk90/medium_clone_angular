import {ArticleInterface} from '../../shared/types/article.interface'

export interface FeedInterface {
  articles: ArticleInterface[]
  articleCount: number
}

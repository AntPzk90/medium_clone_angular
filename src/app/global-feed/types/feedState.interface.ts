import {FeedInterface} from './feed.interface'

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: FeedInterface | null
}

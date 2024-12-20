import {AuthStateInterface} from './authState.interface'
import {FeedInterface} from '../../global-feed/types/feed.interface'
import {PopularTagsStateInterface} from '../../tags/types/popularTags.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedInterface
  tags: PopularTagsStateInterface
}

import {AuthStateInterface} from './authState.interface'
import {FeedInterface} from '../../global-feed/types/feed.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedInterface
}

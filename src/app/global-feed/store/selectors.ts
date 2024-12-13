import {AppStateInterface} from '../../shared/types/appState.interface'
import {createSelector} from '@ngrx/store'
import {FeedInterface} from '../types/feed.interface'
import {FeedStateInterface} from '../types/feedState.interface'

export const feedFeatureSelector = (state: AppStateInterface): FeedInterface =>
  state.feed

export const isLoadingSelector = createSelector(
  // @ts-ignore
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading,
)

export const isErrorSelector = createSelector(
  // @ts-ignore
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error,
)

export const feedSelector = createSelector(
  // @ts-ignore
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data,
)

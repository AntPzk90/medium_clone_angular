import {FeedStateInterface} from '../types/feedState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const _feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    }),
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
)

export function feedReducer(
  state: FeedStateInterface | undefined,
  action: Action,
): FeedStateInterface {
  return _feedReducer(state, action)
}

import {Action, createReducer, on} from '@ngrx/store'

import {PopularTagsStateInterface} from './types/popularTags.interface'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './store/action/popularTags.action'

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  isErrors: null,
  popularTags: null,
}

const _popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      popularTags: action.popularTags,
    }),
  ),
  on(
    getPopularTagsFailureAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      isErrors: 'some error',
    }),
  ),
)

export function popularTagsReducer(
  state: PopularTagsStateInterface | null,
  action: Action,
): PopularTagsStateInterface {
  return _popularTagsReducer(state, action)
}

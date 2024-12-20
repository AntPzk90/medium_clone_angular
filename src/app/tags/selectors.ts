import {createSelector} from '@ngrx/store'

import {AppStateInterface} from '../shared/types/appState.interface'

export const popularTagsSelector = (state: AppStateInterface) => state.tags

export const getPopularTagsSelector = createSelector(
  popularTagsSelector,
  (popularTags) => {
    return popularTags.popularTags
  },
)

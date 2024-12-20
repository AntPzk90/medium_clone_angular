import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../../actionTypes'

import {TagsListType} from '../../types/popularTags.interface'

export const getPopularTagsAction = createAction(ActionTypes.POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.POPULAR_TAGS_SUCCESS,
  props<{popularTags: TagsListType}>(),
)

export const getPopularTagsFailureAction = createAction(
  ActionTypes.POPULAR_TAGS_FAILURE,
)

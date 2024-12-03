import {createSelector} from '@ngrx/store'

import {AppStateInterface} from '../../shared/types/appState.interface'
import {AuthStateInterface} from '../../shared/types/authState.interface'

export const authFeatureSelector = (
  state: AppStateInterface,
): AuthStateInterface => state.auth

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting,
)

export const validationErrorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors,
)

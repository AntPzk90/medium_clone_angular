import {AuthStateInterface} from '../../shared/types/authState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {registerAction} from './actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const _authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
)

export function authReducer(
  state: AuthStateInterface | undefined,
  action: Action,
): AuthStateInterface {
  return _authReducer(state, action)
}

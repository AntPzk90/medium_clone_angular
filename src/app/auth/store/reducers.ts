import {AuthStateInterface} from '../../shared/types/authState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action'
import {state} from '@angular/animations'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const _authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    }),
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    loginAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    }),
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
)

export function authReducer(
  state: AuthStateInterface | undefined,
  action: Action,
): AuthStateInterface {
  return _authReducer(state, action)
}

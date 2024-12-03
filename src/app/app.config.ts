import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'

import {routes} from './app.routes'
import {authReducer} from './auth/store/reducers'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({auth: authReducer}), // Базовое хранилище
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
  ],
}

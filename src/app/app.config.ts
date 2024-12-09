import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'

import {routes} from './app.routes'
import {authReducer} from './auth/store/reducers'
import {provideEffects} from '@ngrx/effects'
import {RegisterEffect} from './auth/store/effects/register.effect'
import {AuthService} from './auth/services/auth.service'
import {provideHttpClient} from '@angular/common/http'
import {PersistenceService} from './shared/services/persistence.service'
import {LoginEffect} from './auth/store/effects/login.effect'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({auth: authReducer}), // Базовое хранилище
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideEffects(RegisterEffect, LoginEffect),
    provideHttpClient(),
    AuthService,
    PersistenceService,
  ],
}

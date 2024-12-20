import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'

import {routes} from './app.routes'
import {authReducer} from './auth/store/reducers'
import {provideEffects} from '@ngrx/effects'
import {RegisterEffect} from './auth/store/effects/register.effect'
import {AuthService} from './auth/services/auth.service'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {PersistenceService} from './shared/services/persistence.service'
import {LoginEffect} from './auth/store/effects/login.effect'
import {GetCurrentUserEffect} from './auth/store/effects/getCurrentUser.effect'
import {AuthInterceptor} from './shared/services/authInterceptors.service'
import {GetFeedEffect} from './global-feed/store/effects/getFeed.effect'
import {feedReducer} from './global-feed/store/reducers'
import {UtilsService} from './shared/services/utils.service'
import {GetPopularTagsEffect} from './tags/store/effects/popularTags.effect'
import {PopularTagsService} from './tags/services/popularTags.service'
import {popularTagsReducer} from './tags/reducers'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      feed: feedReducer,
      tags: popularTagsReducer,
    }), // Базовое хранилище
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideEffects(
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      GetFeedEffect,
      GetPopularTagsEffect,
    ),
    provideHttpClient(),
    AuthService,
    PersistenceService,
    UtilsService,
    PopularTagsService,
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
}

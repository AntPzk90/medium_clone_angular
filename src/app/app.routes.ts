import {Routes} from '@angular/router'
import {RegisterComponent} from './auth/components/register/register.component'
import {LoginComponent} from './auth/components/login/login.component'
import {FeedComponent} from './global-feed/components/feed/feed.component'

export const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

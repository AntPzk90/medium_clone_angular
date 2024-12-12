import {inject} from '@angular/core'
import {HttpInterceptorFn} from '@angular/common/http'
import {PersistenceService} from './persistence.service'

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const persistanceService = inject(PersistenceService)
  const token = persistanceService.get('accessToken')
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  })

  return next(request)
}

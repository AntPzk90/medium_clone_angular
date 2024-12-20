import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {switchMap, map, catchError, of} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'

import {PopularTagsService} from '../../services/popularTags.service'

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../action/popularTags.action'
import {TagsListType} from '../../types/popularTags.interface'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTagsUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: TagsListType) => {
            return getPopularTagsSuccessAction({popularTags})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getPopularTagsFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,
  ) {}
}

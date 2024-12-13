import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {switchMap, map, catchError, of} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'

import {FeedService} from '../../services/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/getFeed.action'

import {FeedInterface} from '../../types/feed.interface'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: FeedInterface) => {
            return getFeedSuccessAction({feed})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getFeedFailureAction)
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {}
}

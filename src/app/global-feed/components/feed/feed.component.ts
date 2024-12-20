import {Component, Input, input, OnDestroy, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router'
import {Observable, Subscription} from 'rxjs'
import queryString from 'query-string'

import {select, Store} from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
} from '../../store/actions/getFeed.action'
import {FeedInterface} from '../../types/feed.interface'
import {
  feedSelector,
  isErrorSelector,
  isLoadingSelector,
} from '../../store/selectors'

import {BannerComponent} from '../../../shared/components/banner/banner.component'
import {ErrorMessageComponent} from '../../../shared/components/error-message/errorMessage.component'
import {LoaderComponent} from '../../../shared/components/loader/loader.component'
import {PaginationComponent} from '../../../shared/components/pagination/pagination.component'
import {TagListComponent} from '../../../shared/components/tag-list/tag-list.component'
import {PopularTagsComponent} from '../../../tags/components/popular-tags/popular-tags.component'

@Component({
  selector: 'mc-global-feed',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BannerComponent,
    ErrorMessageComponent,
    LoaderComponent,
    PaginationComponent,
    TagListComponent,
    PopularTagsComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string = 'http://localhost:3000/api/articles'

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<FeedInterface | null>
  limit: number = 10
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(isErrorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router?.url.split('?')[0]
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrlProps)
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(
      getFeedAction({
        url: apiUrlWithParams,
      }),
    )
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      },
    )
  }
}

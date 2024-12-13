import {Component, Input, input, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {getFeedAction} from '../../store/actions/getFeed.action'
import {FeedInterface} from '../../types/feed.interface'
import {
  feedSelector,
  isErrorSelector,
  isLoadingSelector,
} from '../../store/selectors'

@Component({
  selector: 'mc-global-feed',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<FeedInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(isErrorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  fetchData(): void {
    this.store.dispatch(
      getFeedAction({
        url: (this.apiUrlProps = 'http://localhost:3000/api/articles'),
      }),
    )
  }
}

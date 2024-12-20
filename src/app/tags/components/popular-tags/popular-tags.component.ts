import {Component, OnInit} from '@angular/core'
import {TagListComponent} from '../../../shared/components/tag-list/tag-list.component'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {getPopularTagsSelector} from '../../selectors'
import {getPopularTagsAction} from '../../store/action/popularTags.action'
import {AsyncPipe} from '@angular/common'
import {TagsListType} from '../../types/popularTags.interface'

@Component({
  selector: 'mc-popular-tags',
  standalone: true,
  imports: [TagListComponent, AsyncPipe],
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<TagsListType | null>

  ngOnInit() {
    this.initializeValues()
    this.fetchTags()
  }

  initializeValues(): void {
    // @ts-ignore
    this.popularTags$ = this.store.pipe(select(getPopularTagsSelector))
  }

  fetchTags(): void {
    this.store.dispatch(getPopularTagsAction())
  }

  constructor(private store: Store) {}
}

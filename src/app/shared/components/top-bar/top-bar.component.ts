import {Component, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../auth/store/selectors'
import {CurrentUserInterface} from '../../types/currentUser.interface'
import {AsyncPipe, CommonModule} from '@angular/common'

@Component({
  selector: 'mc-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}

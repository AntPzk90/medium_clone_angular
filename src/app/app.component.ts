import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {TopBarComponent} from './shared/components/top-bar/top-bar.component'
import {Store} from '@ngrx/store'
import {getCurrentUserAction} from './auth/store/actions/getCurrentUser.action'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'madiumclone-angular'

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}

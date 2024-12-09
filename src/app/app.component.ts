import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {TopBarComponent} from './shared/components/top-bar/top-bar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'madiumclone-angular'
}

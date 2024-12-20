import {Component, Input} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'mc-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errorMessage.component.html',
  styleUrl: './errorMessage.component.scss',
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Something went wrong'
}

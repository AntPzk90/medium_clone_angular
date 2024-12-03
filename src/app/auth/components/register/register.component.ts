import {Component, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router'
import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms'
import {Store, StoreModule} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'

@Component({
  selector: 'mc-register',
  standalone: true,
  imports: [ReactiveFormsModule, StoreModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value))
  }
}

import {Component, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router'
import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {AsyncPipe, CommonModule} from '@angular/common'
import {Observable} from 'rxjs'

import {
  isSubmittingSelector,
  validationErrorSelector,
} from '../../store/selectors'
import {RegisterEffect} from '../../store/effects/register.effect'

import {AuthService} from '../../services/auth.service'
import {PersistenceService} from '../../../shared/services/persistence.service'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {BackendErrorMessagesComponent} from '../../../shared/components/backend-error-messages/backend-error-messages.component'
import {LoginEffect} from '../../store/effects/login.effect'
import {loginAction} from '../../store/actions/login.action'
import {LoginRequestInterface} from '../../types/loginRequest.interface'

@Component({
  selector: 'mc-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    AsyncPipe,
    BackendErrorMessagesComponent,
  ],
  providers: [AuthService, RegisterEffect, LoginEffect, PersistenceService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({request}))
  }
}

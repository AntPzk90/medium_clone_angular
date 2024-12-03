import {Component, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router'
import {
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms'
import {select, Store, StoreModule} from '@ngrx/store'
import {AsyncPipe, CommonModule} from '@angular/common'
import {Observable} from 'rxjs'

import {registerAction} from '../../store/actions/register.action'
import {
  isSubmittingSelector,
  validationErrorSelector,
} from '../../store/selectors'
import {RegisterEffect} from '../../store/effects/register.effect'

import {AuthService} from '../../services/auth.service'
import {PersistenceService} from '../../../shared/services/persistence.service'

import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'

import {BackendErrorMessagesComponent} from '../../../shared/components/backend-error-messages/backend-error-messages.component'

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
  providers: [AuthService, RegisterEffect, PersistenceService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}

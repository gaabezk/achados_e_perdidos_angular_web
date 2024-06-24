import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputIconModule } from 'primeng/inputicon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
    DividerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (e) => {
          this.router.navigate(['/pagina-inicial']);
        },
        error: (err) => {
          console.error(err);
          alert('Este e-mail não tem as permissões necessárias para acesso.');
        },
      });
    }
  }

  onForgotPassword(event$: any) {
    event$.preventDefault();
    const email = this.loginForm.controls['email'].value;

    if (!email) {
      alert('Insira um email válido para recuperar sua senha.');
    } else {
      this.authService.resetPassword(email);
      alert(
        'Instruções para redefinir sua senha foram enviadas para o seu e-mail.'
      );
    }
  }
}

import { Component } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [LoginComponent, SignupComponent],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent {

}

import { Injectable, inject } from '@angular/core';
import {
  Auth,
  UserCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router);
  firebaseAuth = inject(Auth);

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  }

  async logout(): Promise<void> {
    await this.firebaseAuth.signOut();
    this.router.navigate(['/login']);
  }

  resetPassword(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.firebaseAuth, email));
  }

}
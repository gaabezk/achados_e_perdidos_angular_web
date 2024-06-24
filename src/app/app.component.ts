import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { user } from '@angular/fire/auth';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  user$ = user(inject(AuthService));
  currentUserSig = signal<any | null | undefined>(undefined);

  ngOnInit(): void {
    this.user$.subscribe((user: any) => {
      if (user) {
        this.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.currentUserSig.set(null);
      }
    });
  }

}

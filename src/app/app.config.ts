import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'achados-e-perdidos-angular-web',
        appId: '1:300960252865:web:fa92f6c1aceb7644eda540',
        storageBucket: 'achados-e-perdidos-angular-web.appspot.com',
        apiKey: 'AIzaSyDrfG-8AjpirwY4zQxKA3TrmHYN3p7CwS8',
        authDomain: 'achados-e-perdidos-angular-web.firebaseapp.com',
        messagingSenderId: '300960252865',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};

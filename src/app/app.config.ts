import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"crud-ecda3","appId":"1:427736818160:web:f38676d63d97784801bd35","databaseURL":"https://crud-ecda3-default-rtdb.firebaseio.com","storageBucket":"crud-ecda3.appspot.com","apiKey":"AIzaSyCTrWY7wEh7YC4RePBUS6nmx5dnihH5sSw","authDomain":"crud-ecda3.firebaseapp.com","messagingSenderId":"427736818160","measurementId":"G-943K5EJSTK"})), provideFirestore(() => getFirestore()),provideStorage(() => getStorage()),]
};

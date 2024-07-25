import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import {initializeApp} from 'firebase/app';
import {getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA5e7lJ-Ulkjt1fcssrvXOtiFivGQgefQU",
  authDomain: "angular-practice-gth.firebaseapp.com",
  projectId: "angular-practice-gth",
  storageBucket: "angular-practice-gth.appspot.com",
  messagingSenderId: "340514324925",
  appId: "1:340514324925:web:b23fcc47721f0106cc92d4"
};

const app = initializeApp(firebaseConfig);

export const storeScore = async (score: number, currentDateTime: any) => {
  const db = getDatabase(app);

  set(ref(db), {
    score: score,
    dateTime: currentDateTime
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

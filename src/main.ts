import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import {initializeApp} from 'firebase/app';
import {getDatabase, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDVrDKzQsMhALumJTkj-UGAqw5V8QjutGQ",
  authDomain: "angular-test-gth.firebaseapp.com",
  projectId: "angular-test-gth",
  storageBucket: "angular-test-gth.appspot.com",
  messagingSenderId: "878489116671",
  appId: "1:878489116671:web:b3bba92aa02617a10211ca",
  measurementId: "G-KLJQEMCPQH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const storeScores = async (score: number) => {

}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

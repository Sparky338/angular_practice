import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import {initializeApp} from 'firebase/app';
import {getDatabase, get, } from 'firebase/database'

const firebaseConfig = {

};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

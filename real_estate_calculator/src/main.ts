import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVpR8itscG7KCCeGwbFOr4DzvSMzVE-9E",
  authDomain: "real-estate-calc-6f146.firebaseapp.com",
  projectId: "real-estate-calc-6f146",
  storageBucket: "real-estate-calc-6f146.firebasestorage.app",
  messagingSenderId: "809331800836",
  appId: "1:809331800836:web:ea512e4efb5a4f0c4e2e51",
  measurementId: "G-YYNW8W69S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

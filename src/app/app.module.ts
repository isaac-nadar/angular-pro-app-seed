import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// containers
import { AppComponent } from './containers/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
const firebaseConfig = {
  apiKey: "AIzaSyA3ZLIWmV2YafFP7hSmfyUtqdNNGW0OWU4",
  authDomain: "fitness-app-b08ae.firebaseapp.com",
  databaseURL: "https://fitness-app-b08ae.firebaseio.com",
  projectId: "fitness-app-b08ae",
  storageBucket: "fitness-app-b08ae.appspot.com",
  messagingSenderId: "976270857360",
  appId: "1:976270857360:web:ba2afa220b12a4ff4c7415"
};

https://fitness-app-b08ae.firebaseapp.com/
*/

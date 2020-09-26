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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HomeComponent, RouterModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

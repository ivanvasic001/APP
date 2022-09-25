import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhoneModule } from './phones/phone.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PhoneModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

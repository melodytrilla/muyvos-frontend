import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengModule } from 'src/app/primeng/primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

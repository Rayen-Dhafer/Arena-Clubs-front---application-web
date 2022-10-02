import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { CheckregisterComponent } from './checkregister/checkregister.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { Mylogin2Component } from './mylogin2/mylogin2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MyloginComponent,
    CheckregisterComponent,
    ForgotPassComponent,
    ProfilComponent,
    Mylogin2Component,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

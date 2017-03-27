import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFoun/page.not.found.component';
 
//init component
 import {InitComponent } from './init.component';


//login component
import{LoginComponent} from './login/login.component'

//home component
import{HomeComponent} from './home/home.component'

//routes 
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';

//services
import {  AlertService,AuthenticationService} from './services/index';


//ngModules
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APPROUTER),
  ],
  providers: [
    AlertService,
    AuthenticationService,
  ],
  bootstrap: [InitComponent]
})
export class AppModule { }

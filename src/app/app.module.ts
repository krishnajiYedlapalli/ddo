import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import{materialArray} from './material/material.module'; 
import { SignInComponent } from './sign-in/sign-in.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmpcountComponent } from './dashboard/empcount/empcount.component';
import { EmpdetailsComponent } from './dashboard/empdetails/empdetails.component'; 
import { DetailsService } from './dashboard/empdetails/details.service'; 


import {
  HttpModule
} from '@angular/http'; 


@NgModule({
  imports:      [ BrowserModule, FormsModule,materialArray,HttpModule],
  declarations: [ AppComponent,SignInComponent,DashboardComponent,EmpdetailsComponent,EmpcountComponent ],
  bootstrap:    [ AppComponent ],
  providers:[DetailsService]
})
export class AppModule { }

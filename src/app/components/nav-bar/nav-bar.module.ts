import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule, routes } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    NavBarComponent,
 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatTabsModule,
    AppRoutingModule
  
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorldComponent } from './world/world.component';
import {HttpClientModule} from '@angular/common/http';
import { IndiaComponent } from './india/india.component';
import { StateComponent } from './state/state.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorldComponent,
    IndiaComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

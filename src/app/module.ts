import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {MainComponent} from './main/main';
import {HeaderComponent} from './components/header/header';

import {ApiService} from './shared/api.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import { HttpModule } from '@angular/http';

import {MainComponent} from './main/main';
import {HeaderComponent} from './components/header/header';

import {ApiService} from './shared/api.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
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

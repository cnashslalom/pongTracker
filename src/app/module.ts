import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {MainComponent} from './main/main';
import {HeaderComponent} from './components/header/header';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

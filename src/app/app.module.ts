import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing} from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { LastfmService } from './services/lastfm.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselBoostrap4Component } from './components/carousel-boostrap4/carousel-boostrap4.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CarouselBoostrap4Component
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule
  ],
  providers: [
      LastfmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

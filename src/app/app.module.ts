import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MainComponent } from './main/main.component';
import { JeuComponent } from './jeu/jeu.component';
import { TagComponent } from './tag/tag.component';

import { LayoutModule } from '@angular/cdk/layout';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RechercheComponent } from './recherche/recherche.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GameSearchComponent,
    SlideshowComponent,
    MainComponent,
    JeuComponent,
    TagComponent,
    GameDetailComponent,
    RechercheComponent,

	

  ],
  imports: [
  BrowserModule,
  SlideshowModule,
  FormsModule,
  LayoutModule,
  HttpClientModule,
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

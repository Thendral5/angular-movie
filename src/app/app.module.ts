import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './atoms/header/header.component';
import { ItemListComponent } from './atoms/item-list/item-list.component';
import { MovieDetailsComponent } from './molecules/movie-details/movie-details.component';
import { MovieListComponent } from './molecules/movie-list/movie-list.component';
import { MovieCatalogueComponent } from './organism/movie-catalogue/movie-catalogue.component';
import { PosterComponent } from './atoms/poster/poster.component';
import { ItemTitleComponent } from './atoms/item-title/item-title.component';
import { MovieService } from './movie.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieCatalogueComponent,
    PosterComponent,
    ItemTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

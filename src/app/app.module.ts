import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from './anime/anime.component';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { CharacterComponent } from './character/character.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppFirebaseModule } from './app-firebase/app-firebase/app-firebase.module';
import { AnimeService } from './services/anime.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent,
    CharacterComponent,
    NotfoundComponent
  ],
  imports: [
  CommonModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    AppFirebaseModule,
  ],
  providers: [NgxSpinnerService,AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

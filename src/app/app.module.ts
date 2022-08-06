import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, BrowserAnimationsModule, MainModule, MovieDetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

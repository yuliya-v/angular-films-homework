import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { MatButtonModule } from '@angular/material/button';
import { ActorProfileModule } from './actor-profile/actor-profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MainModule,
    MatButtonModule,
    MovieDetailsModule,
    ActorProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, BrowserAnimationsModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

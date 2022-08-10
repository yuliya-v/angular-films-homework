import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageSelectComponent } from './components/header/language-select/language-select.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, LanguageSelectComponent, LogoComponent],
  imports: [CommonModule, SharedModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, SearchComponent],
})
export class CoreModule {}

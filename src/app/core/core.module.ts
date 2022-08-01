import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LanguageSelectComponent } from './components/header/language-select/language-select.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { LogoComponent } from './components/header/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, LanguageSelectComponent, LogoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [HeaderComponent, SearchComponent],
})
export class CoreModule {}

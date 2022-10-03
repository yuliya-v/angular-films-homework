import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [MainPageComponent, SearchPageComponent, SortingComponent, PaginatorComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainPageComponent, SearchPageComponent],
})
export class MainModule {}

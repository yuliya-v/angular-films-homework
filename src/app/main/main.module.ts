import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

@NgModule({
  declarations: [MainPageComponent, SortingComponent, PaginatorComponent, MovieListComponent, MovieSearchComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainPageComponent],
})
export class MainModule {}

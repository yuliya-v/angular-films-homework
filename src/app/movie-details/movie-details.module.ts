import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    MovieDetailsPageComponent,
    MoviePosterComponent,
    MovieInfoComponent,
    GenresListComponent,
  ],
  imports: [CommonModule, MatChipsModule],
  exports: [MovieDetailsPageComponent],
})
export class MovieDetailsModule {}

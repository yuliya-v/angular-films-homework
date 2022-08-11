import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { CastComponent } from './components/cast/cast.component';
import { CastMemberComponent } from './components/cast-member/cast-member.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/image/image.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieDetailsPageComponent,
    MoviePosterComponent,
    MovieInfoComponent,
    GenresListComponent,
    CastComponent,
    CastMemberComponent,
    ImagesComponent,
    ImageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MovieDetailsPageComponent],
})
export class MovieDetailsModule {}
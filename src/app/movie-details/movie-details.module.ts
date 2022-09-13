import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { CastComponent } from './components/cast/cast.component';
import { CastMemberComponent } from './components/cast-member/cast-member.component';
import { ImagesComponent } from './components/images/images.component';
import { SharedModule } from '../shared/shared.module';
import MovieDetailsRoutingModule from './movie-details-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MovieDetailsPageComponent,
    MovieInfoComponent,
    GenresListComponent,
    CastComponent,
    CastMemberComponent,
    ImagesComponent,
  ],
  imports: [CommonModule, SharedModule, MovieDetailsRoutingModule],
  exports: [MovieDetailsPageComponent],
})
export class MovieDetailsModule {}

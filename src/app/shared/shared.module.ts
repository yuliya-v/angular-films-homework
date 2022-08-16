import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MaterialModule } from './material/material.module';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { ImageSourceDirective } from './directives/image-source.directive';
import { ImageComponent } from './components/image/image.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieGridComponent,
    ImageSourceDirective,
    ImageComponent,
    RatingComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MovieComponent,
    MovieGridComponent,
    MaterialModule,
    ImageSourceDirective,
    ImageComponent,
    RatingComponent,
  ],
})
export class SharedModule {}

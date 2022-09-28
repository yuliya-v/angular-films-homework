import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MaterialModule } from './material/material.module';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { ImageSourceDirective } from './directives/image-source.directive';
import { ImageComponent } from './components/image/image.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MovieComponent,
    MovieGridComponent,
    ImageSourceDirective,
    ImageComponent,
    RatingComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    MovieComponent,
    MovieGridComponent,
    MaterialModule,
    ImageSourceDirective,
    ImageComponent,
    RatingComponent,
    TranslateModule,
    RouterModule,
  ],
})
export class SharedModule {}

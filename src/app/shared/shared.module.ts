import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MaterialModule } from './material/material.module';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';

@NgModule({
  declarations: [MovieComponent, MovieGridComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MovieComponent, MovieGridComponent, MaterialModule],
})
export class SharedModule {}

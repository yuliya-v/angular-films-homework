import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MovieComponent, MaterialModule],
})
export class SharedModule {}

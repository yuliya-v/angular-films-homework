import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [MainPageComponent, SortingComponent],
  imports: [CommonModule, MatButtonToggleModule],
  exports: [MainPageComponent],
})
export class MainModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [MainPageComponent, SortingComponent, PaginatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
  exports: [MainPageComponent],
})
export class MainModule {}

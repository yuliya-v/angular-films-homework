import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesSorting } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  public sorting = new FormControl<MoviesSorting>('popular');
  @Output() public sortingInputEvent = new EventEmitter<MoviesSorting>();

  constructor() {}
}

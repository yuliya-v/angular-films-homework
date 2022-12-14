import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesSorting } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  public sortInput = new FormControl<MoviesSorting>('popular');
  @Input() sort?: MoviesSorting;
  @Output() public sortingInputEvent = new EventEmitter<MoviesSorting>();

  public ngOnInit() {
    if (this.sort) {
      this.sortInput.setValue(this.sort);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MoviesService, MoviesSorting } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  public sorting = new FormControl<MoviesSorting>('popular');

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.sorting.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      if (value) this.moviesService.sorting.next(value);
    });
  }
}

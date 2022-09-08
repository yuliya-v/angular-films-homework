import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchValue = new FormControl('');
  public form = new FormGroup({
    searchValue: this.searchValue,
  });

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.searchValue.valueChanges
      .pipe(debounceTime(1500), distinctUntilChanged())
      .subscribe(searchString => {
        this.moviesService.query.next(searchString);
      });
  }
}

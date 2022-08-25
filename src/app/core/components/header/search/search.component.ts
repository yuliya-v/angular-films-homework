import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';

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

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchValue.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter(val => !!val && val.length > 1)
      )
      .subscribe(searchString => {
        if (searchString) console.log(searchString);
        // if (searchString) this.searchService.search(searchString);
      });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchValue = new FormControl('');
  public form = new FormGroup({
    searchValue: this.searchValue,
  });
  public searchSub!: Subscription;

  constructor(
    public moviesService: MoviesService,
    public translateService: TranslateService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.searchSub = this.searchValue.valueChanges
      .pipe(debounceTime(1500), distinctUntilChanged())
      .subscribe(searchString => {
        if (searchString) {
          this.router.navigate(['/']);
        }
        this.moviesService.query$.next(searchString);
      });
  }

  public ngOnDestroy() {
    this.searchSub.unsubscribe();
  }
}

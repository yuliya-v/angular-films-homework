import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public totalPages: number = 0;
  public noResults: boolean = false;
  public selectedPage: number = 1;
  private querySub!: Subscription;
  private langSub!: Subscription;

  constructor(public moviesService: MoviesService, public translateService: TranslateService) {}

  public ngOnInit() {
    this.querySub = this.moviesService.query$.subscribe(query => {
      if (query) {
        this.updatePage(1);
      }
    });
    this.langSub = this.translateService.onLangChange.subscribe(() => {
      this.updatePage(this.selectedPage);
    });
  }

  public updatePage(page: number) {
    this.selectedPage = page;
    this.noResults = false;
    this.movies = [];
    this.moviesService.getMoviesByQuery(this.moviesService.query$.value!, page).subscribe(data => {
      this.movies = data.movies;
      this.totalPages = data.totalPages;
      this.noResults = !!this.totalPages;
    });
  }

  public ngOnDestroy() {
    [this.querySub, this.langSub].forEach(sub => sub.unsubscribe());
  }
}

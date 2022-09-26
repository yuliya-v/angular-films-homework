import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public totalPages: number = 0;
  public selectedPage = 1;
  public sortingSub!: Subscription;
  public langSub!: Subscription;

  constructor(public moviesService: MoviesService, public translateService: TranslateService) {}

  public ngOnInit() {
    this.sortingSub = this.moviesService.sorting$.subscribe(() => {
      this.updatePage(1);
    });
    this.langSub = this.translateService.onLangChange.subscribe(() => {
      this.updatePage(this.selectedPage);
    });
  }

  public updatePage(page: number) {
    this.selectedPage = page;
    this.movies = [];
    this.moviesService
      .getMoviesBySorting(this.moviesService.sorting$.value, page)
      .subscribe(data => {
        this.movies = data.movies;
        this.totalPages = data.totalPages;
      });
  }

  public ngOnDestroy() {
    [this.sortingSub, this.langSub].forEach(sub => sub.unsubscribe());
  }
}

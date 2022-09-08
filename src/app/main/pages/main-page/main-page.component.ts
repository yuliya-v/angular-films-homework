import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService, MoviesSorting } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public sorting = new BehaviorSubject<MoviesSorting>('popular');
  public selectedPage = new BehaviorSubject<number>(1);
  public moviesLoadStatus: boolean = false;
  public movies: Movie[] = [];
  public totalPages: number = 0;
  public query: null | string = null;
  public searchMode: boolean = false;

  constructor(public moviesService: MoviesService) {}

  public ngOnInit() {
    this.moviesService.query.subscribe(query => {
      this.query = query;
    });
    this.sorting.subscribe(sorting => {
      this.sortMovies(sorting);
    });
    this.selectedPage.pipe(distinctUntilChanged()).subscribe(pageNum => {
      if (this.query) this.findMovies(this.query, pageNum);
      else this.sortMovies(this.sorting.value, pageNum);
    });
    this.moviesService.query.subscribe(query => {
      if (query) {
        this.searchMode = true;
        this.findMovies(query);
      } else {
        this.searchMode = false;
        this.sortMovies(this.sorting.value);
      }
    });
  }

  private sortMovies(sorting: MoviesSorting, page: number = 1) {
    this.moviesService
      .getMoviesBySorting(sorting, page)
      .subscribe(this.setNewMoviesData.bind(this));
  }

  private findMovies(query: string, page: number = 1) {
    this.moviesService.getMoviesByQuery(query, page).subscribe(this.setNewMoviesData.bind(this));
  }

  private setNewMoviesData(data: { movies: Movie[]; totalPages: number }) {
    this.movies = data.movies;
    this.totalPages = data.totalPages;
  }
}

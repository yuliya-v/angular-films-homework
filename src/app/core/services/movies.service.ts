import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, distinctUntilChanged, map, retry, tap } from 'rxjs';
import { API_KEY, BASE_URL } from '../constants/constants';
import { MoviesResponse } from '../models/http-responses';

enum MoviesPath {
  popular = 'movie/popular',
  topRated = 'movie/top_rated',
  upcoming = 'movie/upcoming',
}

export type MoviesSorting = keyof typeof MoviesPath;

const HTTP_PARAMS = new HttpParams().set('api_key', API_KEY);

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public sorting = new BehaviorSubject<MoviesSorting>('popular');
  public selectedPage = new BehaviorSubject<number>(1);
  public moviesLoadStatus: boolean = false;
  public movies: Movie[] = [];
  public totalPages: number = 0;
  public query = new BehaviorSubject<null | string>(null);

  constructor(private http: HttpClient) {
    this.sorting.subscribe(sorting => {
      this.getMovies(sorting);
    });
    this.selectedPage.pipe(distinctUntilChanged()).subscribe(pageNum => {
      if (this.query.value) this.getMoviesByQuery(this.query.value, pageNum);
      else this.getMovies(this.sorting.value, pageNum);
    });
    this.query.subscribe(query => {
      if (query) this.getMoviesByQuery(query);
      else this.getMovies(this.sorting.value);
    });
  }

  public getMovies(sorting: MoviesSorting, page: number = 1): void {
    this.moviesLoadStatus = false;
    const params = HTTP_PARAMS.set('page', `${page}`);

    this.http
      .get<MoviesResponse>(BASE_URL + MoviesPath[sorting], {
        params,
      })
      .pipe(
        retry(1),
        tap(moviesResponse => {
          this.totalPages = moviesResponse.total_pages;
        }),
        map(moviesResponse => {
          return moviesResponse.results.map(movieData => ({
            ...movieData,
            posterPath: movieData.poster_path,
            releaseDate: movieData.release_date,
            voteAverage: movieData.vote_average,
            genreIds: movieData.genre_ids,
          }));
        })
      )
      .subscribe(movies => {
        this.movies = movies;
        this.moviesLoadStatus = true;
      });
  }

  public getMoviesByQuery(query: string, page: number = 1): void {
    this.moviesLoadStatus = false;
    const params = HTTP_PARAMS.set('page', `${page}`).set('query', `${query}`);

    this.http
      .get<MoviesResponse>(BASE_URL + 'search/movie', {
        params,
      })
      .pipe(
        retry(1),
        tap(moviesResponse => {
          this.totalPages = moviesResponse.total_pages;
        }),
        map(moviesResponse => {
          return moviesResponse.results.map(movieData => ({
            ...movieData,
            posterPath: movieData.poster_path,
            releaseDate: movieData.release_date,
            voteAverage: movieData.vote_average,
            genreIds: movieData.genre_ids,
          }));
        })
      )
      .subscribe(movies => {
        this.movies = movies;
        this.moviesLoadStatus = true;
      });
  }
}

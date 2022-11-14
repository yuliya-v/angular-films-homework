import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { MoviesResponse } from '../models/http-responses';

enum MoviesSortPath {
  popular = 'movie/popular',
  topRated = 'movie/top_rated',
  upcoming = 'movie/upcoming',
}
export type MoviesSorting = keyof typeof MoviesSortPath;
const MOVIE_SEARCH_PATH = 'search/movie';
type MoviesData = { movies: Movie[]; totalPages: number };

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public http: HttpClient) {}

  public getMoviesBySorting(sorting: MoviesSorting, page: number = 1): Observable<MoviesData> {
    const params = new HttpParams().set('page', `${page}`);
    const url = MoviesSortPath[sorting];
    return this.getMovies(url, params);
  }

  public getMoviesByQuery(query: string, page: number = 1): Observable<MoviesData> {
    const params = new HttpParams().set('page', `${page}`).set('query', `${query}`);
    return this.getMovies(MOVIE_SEARCH_PATH, params);
  }

  public getMovies(url: string, params: HttpParams): Observable<MoviesData> {
    return this.http
      .get<MoviesResponse>(url, {
        params,
      })
      .pipe(
        retry(1),
        map(moviesResponse => {
          const movies = moviesResponse.results.map(movieData => ({
            ...movieData,
            posterPath: movieData.poster_path,
            releaseDate: movieData.release_date,
            voteAverage: movieData.vote_average,
            genreIds: movieData.genre_ids,
          }));
          return { movies, totalPages: moviesResponse.total_pages };
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, retry } from 'rxjs';
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
  public query = new BehaviorSubject<null | string>(null);

  constructor(private http: HttpClient) {}

  public getMoviesBySorting(
    sorting: MoviesSorting,
    page: number = 1
  ): Observable<{ movies: Movie[]; totalPages: number }> {
    const params = HTTP_PARAMS.set('page', `${page}`);
    const url = BASE_URL + MoviesPath[sorting];
    return this.getMovies(url, params);
  }

  public getMoviesByQuery(
    query: string,
    page: number = 1
  ): Observable<{ movies: Movie[]; totalPages: number }> {
    const url = BASE_URL + 'search/movie';
    const params = HTTP_PARAMS.set('page', `${page}`).set('query', `${query}`);
    return this.getMovies(url, params);
  }

  public getMovies(
    url: string,
    params: HttpParams
  ): Observable<{ movies: Movie[]; totalPages: number }> {
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

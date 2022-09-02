import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, retry } from 'rxjs';

interface MovieResponseItem {
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  title: string;
  vote_average: number;
}

interface MovieResponse {
  page: 1;
  results: MovieResponseItem[];
  total_results: number;
  total_pages: number;
}

enum MoviesPath {
  popular = 'popular',
  topRated = 'top_rated',
  upcoming = 'upcoming',
}

export type MoviesSorting = keyof typeof MoviesPath;

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public sorting = new BehaviorSubject<MoviesSorting>('popular');
  public movies?: Movie[];

  constructor(private http: HttpClient) {
    this.sorting.subscribe(sorting => {
      this.getMovies(sorting);
    });
  }

  public getMovies(sorting: MoviesSorting, page: number = 1): void {
    const params = new HttpParams()
      .set('api_key', '322e31327d29061a7871205c36d54cfa')
      .set('page', `${page}`);

    this.http
      .get<MovieResponse>(BASE_URL + MoviesPath[sorting], {
        params,
      })
      .pipe(
        retry(1),
        map(movieResponse => {
          return movieResponse.results.map(movieData => ({
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
      });
  }
}

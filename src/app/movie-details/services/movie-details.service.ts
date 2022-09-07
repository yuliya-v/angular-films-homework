import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { API_KEY, BASE_URL } from 'src/app/core/constants/constants';
import { Actor } from 'src/app/core/models/actor.model';
import {
  CreditsResponse,
  ImagesResponse,
  MovieDetailsResponse,
  MoviesResponse,
} from 'src/app/core/models/http-responses';
import { Image } from 'src/app/core/models/image.model';
import { MovieDetails } from 'src/app/core/models/movie-details.model';
import { Movie } from 'src/app/core/models/movie.model';

const HTTP_PARAMS = new HttpParams().set('api_key', API_KEY);

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}

  public getRecommendations(movieId: string): Observable<Movie[]> {
    return this.http
      .get<MoviesResponse>(BASE_URL + `movie/${movieId}/recommendations`, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(moviesResponse => {
          return moviesResponse.results.map(movieData => ({
            ...movieData,
            posterPath: movieData.poster_path,
            releaseDate: movieData.release_date,
            voteAverage: movieData.vote_average,
            genreIds: movieData.genre_ids,
          }));
        })
      );
  }

  public getMovieCast(movieId: string): Observable<Actor[]> {
    return this.http
      .get<CreditsResponse>(BASE_URL + `movie/${movieId}/credits`, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(creditsResponse => {
          return creditsResponse.cast.map(castData => ({
            ...castData,
            profilePath: castData.profile_path,
          }));
        })
      );
  }

  public getImages(movieId: string): Observable<Image[]> {
    return this.http
      .get<ImagesResponse>(BASE_URL + `movie/${movieId}/images`, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(imagesResponse =>
          imagesResponse.posters.map(poster => ({ ...poster, filePath: poster.file_path }))
        )
      );
  }

  public getMovie(id: string): Observable<MovieDetails> {
    return this.http
      .get<MovieDetailsResponse>(BASE_URL + 'movie/' + id, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(movieData => {
          return {
            ...movieData,
            posterPath: movieData.poster_path,
            releaseDate: movieData.release_date,
            voteAverage: movieData.vote_average,
          };
        })
      );
  }
}

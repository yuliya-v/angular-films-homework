import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
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

enum Links {
  Recommendations = 'movie/id/recommendations',
  Credits = 'movie/movieId/credits',
  Images = 'movie/movieId/images',
  Movie = 'movie/movieId',
}

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}

  public getRecommendations(movieId: string): Observable<Movie[]> {
    return this.http.get<MoviesResponse>(Links.Recommendations.replace('movieId', movieId)).pipe(
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
    return this.http.get<CreditsResponse>(Links.Credits.replace('movieId', movieId)).pipe(
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
    return this.http.get<ImagesResponse>(Links.Images.replace('movieId', movieId)).pipe(
      retry(1),
      map(imagesResponse =>
        imagesResponse.posters.map(poster => ({ ...poster, filePath: poster.file_path }))
      )
    );
  }

  public getMovie(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetailsResponse>(Links.Movie.replace('movieId', movieId)).pipe(
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

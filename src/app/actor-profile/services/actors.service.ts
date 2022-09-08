import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { API_KEY, BASE_URL } from 'src/app/core/constants/constants';
import { ActorDetails } from 'src/app/core/models/actor-details.model';
import { ActorPhoto } from 'src/app/core/models/actor-photo.model';
import { MoviesResponse, MoviesResponseItem } from 'src/app/core/models/http-responses';
import { Movie } from 'src/app/core/models/movie.model';

const HTTP_PARAMS = new HttpParams().set('api_key', API_KEY);

interface ActorResponse {
  biography: string;
  birthday: string;
  id: number;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

interface ActorCreditsResponse {
  cast: MoviesResponseItem[];
}

interface ActorPhotosResponse {
  id: string;
  profiles: ActorPhotosResponseItem[];
}
interface ActorPhotosResponseItem {
  height: number;
  file_path: string;
  width: number;
}

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  public getActor(actorId: string): Observable<ActorDetails> {
    return this.http
      .get<ActorResponse>(BASE_URL + `person/${actorId}`, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(actorResponse => ({
          ...actorResponse,
          placeOfBirth: actorResponse.place_of_birth,
          profilePath: actorResponse.profile_path,
        }))
      );
  }

  public getPhotos(actorId: string): Observable<ActorPhoto[]> {
    return this.http
      .get<ActorPhotosResponse>(BASE_URL + `person/${actorId}/images`, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(photosResponse =>
          photosResponse.profiles.map(photo => ({
            ...photo,
            filePath: photo.file_path,
          }))
        )
      );
  }

  public getCredits(actorId: string): Observable<Movie[]> {
    return this.http
      .get<ActorCreditsResponse>(BASE_URL + `person/${actorId}/movie_credits`, {
        params: HTTP_PARAMS,
      })
      .pipe(
        retry(1),
        map(creditsResponse =>
          creditsResponse.cast.map(movieResponse => ({
            ...movieResponse,
            genreIds: movieResponse.genre_ids,
            posterPath: movieResponse.poster_path,
            releaseDate: movieResponse.release_date,
            voteAverage: movieResponse.vote_average,
          }))
        )
      );
  }
}

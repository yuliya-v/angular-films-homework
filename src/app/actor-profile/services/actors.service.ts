import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { ActorDetails } from 'src/app/core/models/actor-details.model';
import { ActorPhoto } from 'src/app/core/models/actor-photo.model';
import { MoviesResponseItem } from 'src/app/core/models/http-responses';
import { Movie } from 'src/app/core/models/movie.model';

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

enum Links {
  Actor = 'person/actorId',
  Photos = 'person/actorId/images',
  Credits = 'person/actorId/movie_credits',
}

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  public getActor(actorId: string): Observable<ActorDetails> {
    return this.http.get<ActorResponse>(Links.Actor.replace('actorId', actorId)).pipe(
      retry(1),
      map(actorResponse => ({
        ...actorResponse,
        placeOfBirth: actorResponse.place_of_birth,
        profilePath: actorResponse.profile_path,
      }))
    );
  }

  public getPhotos(actorId: string): Observable<ActorPhoto[]> {
    return this.http.get<ActorPhotosResponse>(Links.Photos.replace('actorId', actorId)).pipe(
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
    return this.http.get<ActorCreditsResponse>(Links.Credits.replace('actorId', actorId)).pipe(
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

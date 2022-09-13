import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES_DATA } from 'src/app/data/movies.mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public movies?: Movie[];

  getAll(): void {
    this.movies = MOVIES_DATA;
  }
}

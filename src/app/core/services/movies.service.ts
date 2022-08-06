import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { moviesData } from 'src/app/data/movies';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies?: Movie[];

  getAll(): void {
    this.movies = moviesData;
  }
}

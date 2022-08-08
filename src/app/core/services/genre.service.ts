import { Injectable } from '@angular/core';
import { genresData } from 'src/app/data/genres';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  genres: Genre[] = [];

  constructor() {
    this.genres = genresData;
  }

  public getGenre(id: number): string {
    return this.genres.find(el => el.id === id)?.name || 'genre';
  }
}

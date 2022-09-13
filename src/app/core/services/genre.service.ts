import { Injectable } from '@angular/core';
import { GENRES_DATA } from 'src/app/data/genres.mock';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genres: Genre[] = [];

  constructor() {
    this.genres = GENRES_DATA;
  }

  public getGenre(id: number): string {
    return this.genres.find(genre => genre.id === id)?.name || 'genre';
  }
}

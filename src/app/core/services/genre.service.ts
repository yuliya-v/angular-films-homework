import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, of, tap } from 'rxjs';
import { Genre } from '../models/genre.model';

interface GenresResponse {
  genres: Genre[];
}

const GENRES_LINK = 'genre/movie/list';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genres: Partial<Record<string, Genre[]>> = {};

  constructor(public http: HttpClient, public translateService: TranslateService) {}

  public getGenresList(ids: number[]): Observable<string[]> {
    const currentLang = this.translateService.currentLang;
    const currentGenres = this.genres[currentLang];
    if (currentGenres) return of(this.getGenresFromIds(currentGenres, ids));

    return this.http.get<GenresResponse>(GENRES_LINK).pipe(
      map(res => res.genres),
      tap(genres => {
        this.genres[currentLang] = genres;
      }),
      map(genres => this.getGenresFromIds(genres, ids))
    );
  }

  public getGenresFromIds(genres: Genre[], ids: number[]): string[] {
    return ids
      .map(id => {
        return genres.find(genre => genre.id === id)?.name || '';
      })
      .filter(genre => genre.length);
  }
}

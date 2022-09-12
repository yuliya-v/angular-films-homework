import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, of, tap } from 'rxjs';
import { Genre } from '../models/genre.model';

interface GenresResponse {
  genres: Genre[];
}

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genres: Partial<Record<string, Genre[]>> = {};

  constructor(private http: HttpClient, public translateService: TranslateService) {}

  public getGenresList(ids: number[]): Observable<string[]> {
    const lang = this.translateService.currentLang;
    if (lang in this.genres) {
      return of(this.getGenresFromIds(this.genres[lang]!, ids));
    }
    return this.http.get<GenresResponse>('genre/movie/list').pipe(
      map(res => res.genres),
      tap(genres => {
        this.genres[lang] = genres;
      }),
      map(genres => this.getGenresFromIds(genres, ids))
    );
  }

  private getGenresFromIds(genres: Genre[], ids: number[]): string[] {
    return ids
      .map(id => {
        return genres.find(genre => genre.id === id)?.name || '';
      })
      .filter(genre => genre.length);
  }
}

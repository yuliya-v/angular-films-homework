import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of, switchMap, tap } from 'rxjs';
import { GENRES_DATA } from 'src/app/data/genres.mock';
import { GenreService } from './genre.service';

describe('GenreService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let translateSpy: jasmine.SpyObj<TranslateService>;
  let service: GenreService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    translateSpy = jasmine.createSpyObj('TranslateService', ['currentLang']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: TranslateService, useValue: translateSpy },
      ],
    });
    service = TestBed.inject(GenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get genres', () => {
    const ids = [1, 35, 80];
    const list = GENRES_DATA;
    expect(service.getGenresFromIds(list, ids)).toEqual(['Comedy', 'Crime']);
  });

  it('should get genres list', () => {
    translateSpy.currentLang = 'en';
    httpClientSpy.get.and.returnValue(of({ genres: GENRES_DATA }));

    service
      .getGenresList([35, 80])
      .pipe(
        tap(res => {
          expect(res).toEqual(['Comedy', 'Crime']);
          expect(service.http.get).toHaveBeenCalled();
        }),
        switchMap(() => service.getGenresList([35, 80]))
      )
      .pipe(
        tap(res => {
          expect(res).toEqual(['Comedy', 'Crime']);
          expect(service.http.get).toHaveBeenCalledTimes(1);
        })
      )
      .subscribe();
  });
});

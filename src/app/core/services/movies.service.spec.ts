import { HttpClient, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MOVIES_DATA } from 'src/app/data/movies.mock';
import { MoviesService } from './movies.service';

const response = {
  page: 1,
  results: [
    {
      poster_path: '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
      adult: false,
      overview:
        'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
      release_date: '2016-08-03',
      genre_ids: [14, 28, 80],
      id: 297761,
      original_title: 'Suicide Squad',
      original_language: 'en',
      title: 'Suicide Squad',
      backdrop_path: '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
      popularity: 48.261451,
      vote_count: 1466,
      video: false,
      vote_average: 5.91,
    },
  ],
  total_results: 19629,
  total_pages: 982,
};

describe('MoviesServiceService', () => {
  let service: MoviesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movies', () => {
    httpClientSpy.get.and.returnValue(of(response));
    service.getMovies('url', new HttpParams()).subscribe(() => {
      expect(service.http.get).toHaveBeenCalled();
    });
  });

  it('should get movies by query', () => {
    spyOn(service, 'getMovies').and.returnValue(of({ movies: MOVIES_DATA, totalPages: 3 }));
    service.getMoviesByQuery('query').subscribe(() => {
      expect(service.getMovies).toHaveBeenCalled();
    });
  });

  it('should get movies by sorting', () => {
    spyOn(service, 'getMovies').and.returnValue(of({ movies: MOVIES_DATA, totalPages: 3 }));
    service.getMoviesBySorting('popular').subscribe(() => {
      expect(service.getMovies).toHaveBeenCalled();
    });
  });
});

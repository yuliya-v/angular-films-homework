import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { MoviesService, MoviesSorting } from 'src/app/core/services/movies.service';
import { MOVIES_DATA } from 'src/app/data/movies.mock';

import { MovieListComponent } from './movie-list.component';

class MoviesServiceStub implements Partial<MoviesService> {
  sorting$ = new BehaviorSubject<MoviesSorting>('popular');
  getMoviesBySorting() {
    return of({ movies: MOVIES_DATA, totalPages: 3 });
  }
}

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: MoviesService, useClass: MoviesServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update page', fakeAsync(() => {
    expect(component.selectedPage).toBe(1);
    component.updatePage(2);
    expect(component.selectedPage).toBe(2);
    component.moviesService.sorting$.next('topRated');
    tick();
    expect(component.selectedPage).toBe(1);
  }));
});

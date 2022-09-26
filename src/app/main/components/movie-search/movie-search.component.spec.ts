import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MOVIES_DATA } from 'src/app/data/movies.mock';
import { MovieSearchComponent } from './movie-search.component';

class MoviesServiceStub implements Partial<MoviesService> {
  public query$ = new BehaviorSubject<string | null>(null);
  public getMoviesByQuery() {
    return of({ movies: MOVIES_DATA, totalPages: 3 });
  }
}

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSearchComponent],
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: MoviesService, useClass: MoviesServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update page', () => {
    expect(component.selectedPage).toBe(1);
    component.updatePage(2);
    expect(component.selectedPage).toBe(2);
    component.moviesService.query$.next('top');
    expect(component.selectedPage).toBe(1);
  });
});

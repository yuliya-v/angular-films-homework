import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MOVIES_DATA } from 'src/app/data/movies.mock';
import { SearchPageComponent } from './search-page.component';

class MoviesServiceStub implements Partial<MoviesService> {
  public query$ = new BehaviorSubject<string | null>(null);
  public getMoviesByQuery() {
    return of({ movies: MOVIES_DATA, totalPages: 3 });
  }
}

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      providers: [{ provide: MoviesService, useClass: MoviesServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

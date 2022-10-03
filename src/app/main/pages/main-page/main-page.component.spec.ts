import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { MoviesService, MoviesSorting } from 'src/app/core/services/movies.service';
import { MOVIES_DATA } from 'src/app/data/movies.mock';
import { MainPageComponent } from './main-page.component';

class MoviesServiceStub implements Partial<MoviesService> {
  sorting$ = new BehaviorSubject<MoviesSorting>('popular');
  getMoviesBySorting() {
    return of({ movies: MOVIES_DATA, totalPages: 3 });
  }
}

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      providers: [{ provide: MoviesService, useClass: MoviesServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on sort select', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onSortingSelect('topRated');
    expect(navigateSpy).toHaveBeenCalled();
  });
});

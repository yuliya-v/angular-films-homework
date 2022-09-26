import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { GenreService } from 'src/app/core/services/genre.service';
import { MOVIES_DATA } from 'src/app/data/movies.mock';
import { MovieComponent } from './movie.component';

class GenreServiceStub implements Partial<GenreService> {
  public getGenresList(ids: number[]) {
    return of(ids.map(el => el.toString()));
  }
}

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  const movieData = MOVIES_DATA[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent],
      providers: [{ provide: GenreService, useClass: GenreServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have data', () => {
    [component.genres.length, component.title, component.rating, component.imagePath].forEach(
      prop => {
        expect(prop).toBeFalsy();
      }
    );
  });

  it('should set data', () => {
    component.data = movieData;
    component.ngOnInit();
    [component.genres.length, component.title, component.rating, component.imagePath].forEach(
      prop => {
        expect(prop).toBeTruthy();
      }
    );
  });

  it('should set title', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement;
    component.data = movieData;
    component.ngOnInit();
    fixture.detectChanges();
    expect(title.textContent.toLowerCase()).toBe(movieData.title.toLowerCase());
  });
});

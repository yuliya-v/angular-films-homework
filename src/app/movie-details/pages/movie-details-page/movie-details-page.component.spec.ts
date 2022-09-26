import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ACTORS_DATA } from 'src/app/data/actors.mock';
import { IMAGES_DATA } from 'src/app/data/images.mock';
import { MOVIE_DETAILS } from 'src/app/data/movie-details.mock';
import { MOVIES_DATA } from 'src/app/data/movies.mock';
import { MovieDetailsService } from '../../services/movie-details.service';
import { MovieDetailsPageComponent } from './movie-details-page.component';

class MovieDetailsServiceStub implements Partial<MovieDetailsService> {
  public getMovie() {
    return of(MOVIE_DETAILS);
  }

  public getRecommendations() {
    return of(MOVIES_DATA);
  }

  public getImages() {
    return of(IMAGES_DATA);
  }

  public getMovieCast() {
    return of(ACTORS_DATA);
  }
}

describe('MovieDetailsPageComponent', () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsPageComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      providers: [{ provide: MovieDetailsService, useClass: MovieDetailsServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

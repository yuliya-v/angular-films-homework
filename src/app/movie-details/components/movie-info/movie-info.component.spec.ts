import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieInfoComponent } from './movie-info.component';

describe('MovieInfoComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;
  const movieData = {
    budget: 13200000,
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
      { id: 10749, name: 'Romance' },
    ],
    id: 19404,
    overview:
      'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
    posterPath: '/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
    releaseDate: '1995-10-19',
    revenue: 100000000,
    runtime: 190,
    status: 'Released',
    tagline: 'Come Fall In love, All Over Again..',
    title: 'Dilwale Dulhania Le Jayenge',
    voteAverage: 8.722,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieInfoComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform currency', () => {
    component.data = movieData;
    component.ngOnInit();
    expect(component.budget).toBe('$ 13 200 000');
  });

  it('should transform duration', () => {
    component.data = movieData;
    component.ngOnInit();
    expect(component.duration).toBe('3:10');
  });
});

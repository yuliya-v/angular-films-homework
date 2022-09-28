import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService, MoviesSorting } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(public moviesService: MoviesService) {}
}

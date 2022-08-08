import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/core/models/movie-details.model';
import { Movie } from 'src/app/core/models/movie.model';
import { movieDetails } from 'src/app/data/movie-details';
import { moviesData } from 'src/app/data/movies';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent {
  @Input() movie: MovieDetails = movieDetails;
}

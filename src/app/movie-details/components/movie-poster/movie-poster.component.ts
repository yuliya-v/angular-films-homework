import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/core/models/movie-details.model';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
})
export class MoviePosterComponent implements OnInit {
  @Input() data?: MovieDetails;
  src = '';
  rating = 0;
  baseLink = 'https://image.tmdb.org/t/p/w300//';

  constructor() {}

  ngOnInit() {
    if (this.data) {
      this.src = this.baseLink + this.data.poster_path;
      this.rating = this.data.vote_average;
    }
  }
}

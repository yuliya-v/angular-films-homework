import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() data?: Movie;
  title = '';
  img = '';
  rating = 0;
  genres: number[] = [];
  baseLink = 'https://image.tmdb.org/t/p/w185//';

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.img = this.baseLink + this.data.poster_path;
      this.rating = this.data.vote_average;
      this.genres = this.data.genre_ids;
    }
  }
}

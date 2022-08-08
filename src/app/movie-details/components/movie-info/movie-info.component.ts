import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/core/models/movie-details.model';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() data?: MovieDetails;
  title = '';
  overview = '';
  releaseDate = '';
  duration = '';
  genreIds: number[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.overview = this.data.overview;
      this.releaseDate = this.data.release_date;
      this.duration = `${this.data.runtime}`;
      this.genreIds = this.data.genres.map(el => el.id);
    }
  }
}

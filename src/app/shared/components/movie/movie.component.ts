import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { GenreService } from 'src/app/core/services/genre.service';

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
  genres: string[] = [];
  baseLink = 'https://image.tmdb.org/t/p/w185//';

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.rating = this.data.vote_average;
      this.genres = this.data.genre_ids.map(el => this.genreService.getGenre(el));
      const image = new Image();
      image.src = this.baseLink + this.data.poster_path;
      image.onload = () => (this.img = image.src);
    }
  }
}

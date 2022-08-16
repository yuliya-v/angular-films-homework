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
  public title: string = '';
  public src: string = '';
  public rating: number = 0;
  public imagePath: string = '';
  public genres: string[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.rating = this.data.voteAverage;
      this.genres = this.data.genreIds.map(el => this.genreService.getGenre(el));
      this.imagePath = this.data.posterPath;
    }
  }
}

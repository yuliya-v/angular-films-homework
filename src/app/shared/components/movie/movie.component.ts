import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() public data?: Movie;
  public id: string = '';
  public title: string = '';
  public rating: number = 0;
  public imagePath: string = '';
  public genres: string[] = [];

  constructor(private genreService: GenreService) {}

  public ngOnInit(): void {
    if (this.data) {
      this.id = this.data.id.toString();
      this.title = this.data.title;
      this.rating = this.data.voteAverage;
      this.imagePath = this.data.posterPath;
      this.genreService.getGenresList(this.data.genreIds).subscribe(genresList => {
        this.genres = genresList;
      });
    }
  }
}

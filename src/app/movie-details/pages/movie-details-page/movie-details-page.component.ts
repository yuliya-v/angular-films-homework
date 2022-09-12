import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Actor } from 'src/app/core/models/actor.model';
import { Image } from 'src/app/core/models/image.model';
import { MovieDetails } from 'src/app/core/models/movie-details.model';
import { Movie } from 'src/app/core/models/movie.model';
import { ImageSize } from 'src/app/core/services/image.service';
import { MovieDetailsService } from '../../services/movie-details.service';

const MOVIE_ID = '122';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
  @Input() public movieId: string = MOVIE_ID;
  public movie?: MovieDetails;
  public actors?: Actor[];
  public images: Image[] = [];
  public recommendations: Movie[] = [];
  public posterPath: string = '';
  public rating: number = 0;
  public moviePosterSize: ImageSize = ImageSize.Large;
  private readonly IMAGES_NUM = 12;
  private readonly ACTORS_NUM = 30;

  constructor(
    private movieDetailsService: MovieDetailsService,
    public translateService: TranslateService
  ) {}

  public ngOnInit() {
    this.movieDetailsService.getMovie(this.movieId).subscribe(movie => {
      this.movie = movie;
      this.posterPath = movie.posterPath || '';
      this.rating = movie.voteAverage;
    });

    this.movieDetailsService.getRecommendations(this.movieId).subscribe(recommendations => {
      this.recommendations = recommendations;
    });

    this.movieDetailsService.getImages(this.movieId).subscribe(images => {
      this.images = images.slice(0, this.IMAGES_NUM);
    });

    this.movieDetailsService.getMovieCast(this.movieId).subscribe(actors => {
      this.actors = actors.slice(0, this.ACTORS_NUM);
    });
  }
}

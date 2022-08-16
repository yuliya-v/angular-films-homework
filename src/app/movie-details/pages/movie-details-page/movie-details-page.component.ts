import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/core/models/actor.model';
import { Image } from 'src/app/core/models/image.model';
import { MovieDetails } from 'src/app/core/models/movie-details.model';
import { Movie } from 'src/app/core/models/movie.model';
import { ACTORS_DATA } from 'src/app/data/actors.mock';
import { IMAGES_DATA } from 'src/app/data/images.mock';
import { MOVIE_DETAILS } from 'src/app/data/movie-details.mock';
import { MOVIES_DATA } from 'src/app/data/movies.mock';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
  @Input() movie: MovieDetails = MOVIE_DETAILS;
  public actors: Actor[] = [];
  public images: Image[] = [];
  public recommendations: Movie[] = [];
  public posterPath: string = '';
  public rating: number = 0;

  ngOnInit() {
    this.actors = ACTORS_DATA;
    this.recommendations = MOVIES_DATA.reverse();
    this.images = IMAGES_DATA;
    this.posterPath = this.movie.poster_path;
    this.rating = this.movie.vote_average;
  }
}

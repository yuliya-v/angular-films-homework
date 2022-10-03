import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Actor } from 'src/app/core/models/actor.model';
import { Image } from 'src/app/core/models/image.model';
import { MovieDetails } from 'src/app/core/models/movie-details.model';
import { Movie } from 'src/app/core/models/movie.model';
import { ImageSize } from 'src/app/core/services/image.service';
import { MovieDetailsService } from '../../services/movie-details.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  public movie?: MovieDetails;
  public actors?: Actor[];
  public images: Image[] = [];
  public recommendations: Movie[] = [];
  public posterPath: string = '';
  public rating: number = 0;
  public moviePosterSize: ImageSize = ImageSize.Large;
  public loading: boolean = true;
  private readonly IMAGES_NUM = 12;
  private readonly ACTORS_NUM = 30;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private movieDetailsService: MovieDetailsService,
    public translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    const { lang, id } = this.route.snapshot.params;
    this.getData();
    this.translateService.use(lang);
    this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.router.navigate([`/${e.lang}`, 'movie', id]);
    });
  }

  private getData() {
    const { id } = this.route.snapshot.params;
    this.movieDetailsService.getMovie(id).subscribe(movie => {
      this.movie = movie;
      this.posterPath = movie.posterPath || '';
      this.rating = movie.voteAverage;
      this.loading = false;
    });

    this.movieDetailsService.getRecommendations(id).subscribe(recommendations => {
      this.recommendations = recommendations;
    });

    this.movieDetailsService.getImages(id).subscribe(images => {
      this.images = images.slice(0, this.IMAGES_NUM);
    });

    this.movieDetailsService.getMovieCast(id).subscribe(actors => {
      this.actors = actors.slice(0, this.ACTORS_NUM);
    });
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

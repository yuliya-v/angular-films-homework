import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { ActorDetails } from 'src/app/core/models/actor-details.model';
import { ActorPhoto } from 'src/app/core/models/actor-photo.model';
import { Movie } from 'src/app/core/models/movie.model';
import { ImageSize } from 'src/app/core/services/image.service';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-actor-profile-page',
  templateUrl: './actor-profile-page.component.html',
  styleUrls: ['./actor-profile-page.component.scss'],
})
export class ActorProfilePageComponent implements OnInit, OnDestroy {
  public actor?: ActorDetails;
  public photos?: ActorPhoto[];
  public relatedMovies: Movie[][] = [];
  public visibleRelatedMovies: Movie[] = [];
  public actorImageSize: ImageSize = ImageSize.Large;
  private currentChunk: number = 0;
  private chunksLimit: number = 0;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public loading: boolean = true;

  constructor(
    private actorsService: ActorsService,
    public translateService: TranslateService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.getData();
    this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateData();
    });
  }

  private getData() {
    const { id } = this.route.snapshot.params;
    this.actorsService.getActor(id).subscribe(actor => {
      this.actor = actor;
      this.loading = false;
    });
    this.actorsService.getCredits(id).subscribe(credits => {
      this.relatedMovies = this.splitArray(credits);
      this.chunksLimit = this.relatedMovies.length;
      this.visibleRelatedMovies.push(...this.relatedMovies[this.currentChunk]);
    });
  }

  private updateData() {
    this.loading = true;
    const { id } = this.route.snapshot.params;
    this.actorsService.getActor(id).subscribe(actor => {
      this.actor = actor;
      this.loading = false;
    });
    this.actorsService.getCredits(id).subscribe(credits => {
      this.relatedMovies = this.splitArray(credits);
      this.chunksLimit = this.relatedMovies.length;
      this.currentChunk = 0;
      this.visibleRelatedMovies = [];
      this.visibleRelatedMovies.push(...this.relatedMovies[this.currentChunk]);
    });
  }

  public onScroll() {
    if (this.currentChunk < this.chunksLimit) {
      this.visibleRelatedMovies.push(...this.relatedMovies[++this.currentChunk]);
    }
  }

  private splitArray<T>(inputArr: T[], chunkSize = 15): T[][] {
    const resultArr = [];
    for (let i = 0; i < inputArr.length; i += chunkSize) {
      resultArr.push(inputArr.slice(i, i + chunkSize));
    }
    return resultArr;
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

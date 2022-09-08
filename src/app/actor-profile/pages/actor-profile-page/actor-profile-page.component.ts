import { Component, Input, OnInit } from '@angular/core';
import { ActorDetails } from 'src/app/core/models/actor-details.model';
import { ActorPhoto } from 'src/app/core/models/actor-photo.model';
import { Movie } from 'src/app/core/models/movie.model';
import { ImageSize } from 'src/app/core/services/image.service';
import { ActorsService } from '../../services/actors.service';

const ACTOR_ID = '4785';

@Component({
  selector: 'app-actor-profile-page',
  templateUrl: './actor-profile-page.component.html',
  styleUrls: ['./actor-profile-page.component.scss'],
})
export class ActorProfilePageComponent implements OnInit {
  @Input() public actorId = ACTOR_ID;
  public actor?: ActorDetails;
  public photos: ActorPhoto[] = [];
  public relatedMovies: Movie[][] = [];
  public visibleRelatedMovies: Movie[] = [];
  public actorImageSize: ImageSize = ImageSize.Large;
  private currentChunk: number = 0;
  private chunksLimit: number = 0;

  constructor(private actorsService: ActorsService) {}

  public ngOnInit() {
    this.actorsService.getActor(this.actorId).subscribe(actor => {
      this.actor = actor;
    });
    this.actorsService.getPhotos(this.actorId).subscribe(photos => {
      this.photos = photos;
    });
    this.actorsService.getCredits(this.actorId).subscribe(credits => {
      this.relatedMovies = this.splitArray(credits);
      this.chunksLimit = this.relatedMovies.length;
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
}

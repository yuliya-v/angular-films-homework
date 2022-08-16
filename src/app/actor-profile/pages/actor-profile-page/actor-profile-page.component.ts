import { Component, Input, OnInit } from '@angular/core';
import { ActorDetails } from 'src/app/core/models/actor-details';
import { ActorPhoto } from 'src/app/core/models/actor-photo';
import { Movie } from 'src/app/core/models/movie.model';
import { ACTOR_DATA } from 'src/app/data/actor.mock';
import { ACTOR_PHOTOS } from 'src/app/data/actor-photos.mock';
import { MOVIES_DATA } from 'src/app/data/movies.mock';

@Component({
  selector: 'app-actor-profile-page',
  templateUrl: './actor-profile-page.component.html',
  styleUrls: ['./actor-profile-page.component.scss'],
})
export class ActorProfilePageComponent implements OnInit {
  @Input() actor: ActorDetails = ACTOR_DATA;
  public photos: ActorPhoto[] = [];
  public relatedMovies: Movie[] = [];

  ngOnInit() {
    this.photos = ACTOR_PHOTOS;
    this.relatedMovies = MOVIES_DATA;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActorDetails } from 'src/app/core/models/actor-details';
import { ActorPhoto } from 'src/app/core/models/actor-photo';
import { Movie } from 'src/app/core/models/movie.model';
import { actorData } from 'src/app/data/actor';
import { actorPhotos } from 'src/app/data/actor-photos';
import { moviesData } from 'src/app/data/movies';

@Component({
  selector: 'app-actor-profile-page',
  templateUrl: './actor-profile-page.component.html',
  styleUrls: ['./actor-profile-page.component.scss'],
})
export class ActorProfilePageComponent implements OnInit {
  @Input() actor: ActorDetails = actorData;
  photos: ActorPhoto[] = [];
  relatedMovies: Movie[] = [];

  ngOnInit() {
    this.photos = actorPhotos;
    this.relatedMovies = moviesData;
  }
}

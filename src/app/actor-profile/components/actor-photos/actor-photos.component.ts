import { Component, Input, OnInit } from '@angular/core';
import { ActorPhoto } from 'src/app/core/models/actor-photo';

@Component({
  selector: 'app-actor-photos',
  templateUrl: './actor-photos.component.html',
  styleUrls: ['./actor-photos.component.scss'],
})
export class ActorPhotosComponent {
  @Input() data: ActorPhoto[] = [];
  baseLink = 'https://image.tmdb.org/t/p/w300//';
  constructor() {}
}

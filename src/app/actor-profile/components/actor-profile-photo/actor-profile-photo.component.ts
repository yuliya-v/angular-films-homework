import { Component, Input, OnInit } from '@angular/core';
import { ActorDetails } from 'src/app/core/models/actor-details';

@Component({
  selector: 'app-actor-profile-photo',
  templateUrl: './actor-profile-photo.component.html',
  styleUrls: ['./actor-profile-photo.component.scss'],
})
export class ActorProfilePhotoComponent implements OnInit {
  @Input() data?: ActorDetails;
  src = '';
  baseLink = 'https://image.tmdb.org/t/p/w300//';

  constructor() {}

  ngOnInit() {
    if (this.data) {
      this.src = this.baseLink + this.data.profile_path;
    }
  }
}

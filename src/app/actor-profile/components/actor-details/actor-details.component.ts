import { Component, Input, OnInit } from '@angular/core';
import { ActorDetails } from 'src/app/core/models/actor-details';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent implements OnInit {
  @Input() data?: ActorDetails;
  name = '';
  birth = '';
  birthPlace = '';
  biography = '';

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.name = this.data.name;
      this.birth = this.data.birthday;
      this.birthPlace = this.data.place_of_birth;
      this.biography = this.data.biography;
    }
  }
}

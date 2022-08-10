import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/core/models/actor.model';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent implements OnInit {
  @Input() data?: Actor;
  baseLink = 'https://image.tmdb.org/t/p/w185/';
  image = '';
  name = '';
  character = '';

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.image = this.baseLink + this.data.profile_path;
      this.name = this.data.name;
      this.character = this.data.character;
    }
  }
}

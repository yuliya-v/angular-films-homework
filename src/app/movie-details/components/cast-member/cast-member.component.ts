import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/core/models/actor.model';

@Component({
  selector: 'app-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent implements OnInit {
  @Input() data?: Actor;
  public name: string = '';
  public character: string = '';
  public imagePath: string = '';

  ngOnInit(): void {
    if (this.data) {
      this.imagePath = this.data.profilePath || '';
      this.name = this.data.name;
      this.character = this.data.character;
    }
  }
}

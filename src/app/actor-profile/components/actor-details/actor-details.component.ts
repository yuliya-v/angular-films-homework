import { Component, Input, OnInit } from '@angular/core';
import { ActorDetails } from 'src/app/core/models/actor-details.model';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent implements OnInit {
  @Input() public data?: ActorDetails;
  public name: string = '';
  public birthDay: string = '';
  public birthPlace: string = '';
  public biography: string = '';

  public ngOnInit(): void {
    if (this.data) {
      this.name = this.data.name;
      this.birthDay = this.data.birthday;
      this.birthPlace = this.data.placeOfBirth;
      this.biography = this.data.biography;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/core/models/actor.model';

const INIT_ACTORS_NUMBER = 6;

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  @Input() data: Actor[] = [];
  public currentData: Actor[] = [];

  ngOnInit() {
    if (this.data) {
      this.currentData = this.data.slice(0, INIT_ACTORS_NUMBER);
    }
  }

  public toggleActors(): void {
    if (this.currentData.length === INIT_ACTORS_NUMBER) {
      this.currentData = this.data;
    } else {
      this.currentData = this.data.slice(0, INIT_ACTORS_NUMBER);
    }
  }
}

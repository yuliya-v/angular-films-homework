import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/core/models/actor.model';

const INIT_ACTORS_NUMBER = 6;

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  @Input() public data: Actor[] = [];
  public currentData: Actor[] = [];
  public initActorsNumber: number = INIT_ACTORS_NUMBER;

  public ngOnInit() {
    if (this.data) {
      this.currentData = this.data.slice(0, this.initActorsNumber);
    }
  }

  public toggleActors(): void {
    if (this.currentData.length === this.initActorsNumber) {
      this.currentData = this.data;
    } else {
      this.currentData = this.data.slice(0, this.initActorsNumber);
    }
  }
}

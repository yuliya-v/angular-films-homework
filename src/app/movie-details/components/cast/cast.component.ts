import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actor } from 'src/app/core/models/actor.model';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  @Input() data: Actor[] = [];
  currentData: Actor[] = [];
  initActorsNumber = 6;

  constructor() {}

  ngOnInit() {
    if (this.data) {
      this.currentData = this.data.slice(0, this.initActorsNumber);
    }
  }

  toggleActors() {
    if (this.currentData.length === this.initActorsNumber) {
      this.currentData = this.data;
    } else {
      this.currentData = this.data.slice(0, this.initActorsNumber);
    }
  }
}

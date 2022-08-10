import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  @Input() data?: Movie[];

  constructor() {}
}

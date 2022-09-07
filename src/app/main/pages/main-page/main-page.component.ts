import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public searchMode: boolean = false;

  constructor(public moviesService: MoviesService) {
    moviesService.query.subscribe(query => {
      this.searchMode = query ? true : false;
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @ViewChild(PaginatorComponent) private paginator!: PaginatorComponent;
  public movies: Movie[] = [];
  public totalPages: number = 0;
  private selectedPage = 1;

  constructor(public moviesService: MoviesService, public translateService: TranslateService) {}

  public ngOnInit() {
    this.moviesService.sorting$.subscribe(s => {
      if (this.paginator) {
        this.paginator.selectedPage = 1;
        this.paginator.repaint();
      }
      this.updatePage(1);
    });
    this.translateService.onLangChange.subscribe(() => {
      this.updatePage(this.selectedPage);
    });
  }

  public updatePage(page: number) {
    this.selectedPage = page;
    this.movies = [];
    this.moviesService
      .getMoviesBySorting(this.moviesService.sorting$.value, page)
      .subscribe(data => {
        this.movies = data.movies;
        this.totalPages = data.totalPages;
      });
  }
}

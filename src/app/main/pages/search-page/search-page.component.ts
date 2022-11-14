import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public totalPages: number = 0;
  public noResults: boolean = false;
  public selectedPage: number = 1;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public moviesService: MoviesService,
    public translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    const { lang } = this.route.snapshot.params;
    const { page, query } = this.route.snapshot.queryParams;
    this.selectedPage = +page;
    this.translateService.use(lang);
    this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.router.navigate([`/${e.lang}`, 'search'], { queryParams: { page, query } });
    });
    this.getPageData(page, query);
  }

  public getPageData(page: number, query: string) {
    this.moviesService.getMoviesByQuery(query, page).subscribe(data => {
      this.movies = data.movies;
      this.totalPages = data.totalPages;
      this.noResults = !!this.totalPages;
    });
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

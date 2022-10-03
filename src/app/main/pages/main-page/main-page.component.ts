import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService, MoviesSorting } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public totalPages: number = 0;
  public page: number = 1;
  public sort?: MoviesSorting;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public moviesService: MoviesService,
    public translateService: TranslateService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    const { lang } = this.route.snapshot.params;
    const { page, sort } = this.route.snapshot.queryParams;
    if (!page || !sort) {
      this.router.navigate([`/${lang}`, 'main'], { queryParams: { page: 1, sort: 'popular' } });
    }
    this.page = +page;
    this.sort = sort;
    this.translateService.use(lang);
    this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.router.navigate([`/${e.lang}`, 'main'], { queryParams: { page, sort } });
    });
    this.getPageData(page, sort);
  }

  public getPageData(page: number, sort: MoviesSorting) {
    this.moviesService.getMoviesBySorting(sort, page).subscribe(data => {
      this.movies = data.movies;
      this.totalPages = data.totalPages;
    });
  }

  public onSortingSelect(sort: MoviesSorting) {
    this.router.navigate([`/${this.translateService.currentLang}`, 'main'], {
      queryParams: { page: 1, sort },
    });
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

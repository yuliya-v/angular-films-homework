import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/core/models/movie-details.model';

const MINUTES_IN_HOUR = 60;

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  providers: [CurrencyPipe],
})
export class MovieInfoComponent implements OnInit {
  @Input() public data?: MovieDetails;
  public title: string = '';
  public overview: string = '';
  public releaseDate: string = '';
  public duration: string = '';
  public budget: string = '';
  public revenue: string = '';
  public genres: string[] = [];

  constructor(private currencyPipe: CurrencyPipe) {}

  public ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.overview = this.data.overview;
      this.releaseDate = this.data.releaseDate;
      this.genres = this.data.genres.map(el => el.name);
      [this.budget, this.revenue] = [this.data.budget, this.data.revenue].map(
        this.transformCurrency.bind(this)
      );
      this.duration = this.transformDuration(this.data.runtime);
    }
  }

  public transformCurrency(amount: number): string {
    return (
      this.currencyPipe
        .transform(amount, 'USD', undefined, '0.0-0')
        ?.replace(/,/g, ' ')
        .replace('$', '$ ') || ''
    );
  }

  private transformDuration(duration: number): string {
    const hours = Math.floor(duration / MINUTES_IN_HOUR);
    const minutes = duration - hours * MINUTES_IN_HOUR;
    return `${hours}:${minutes}`;
  }
}

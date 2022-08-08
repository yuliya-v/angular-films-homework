import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/core/models/movie-details.model';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  providers: [CurrencyPipe],
})
export class MovieInfoComponent implements OnInit {
  @Input() data?: MovieDetails;
  title = '';
  overview = '';
  releaseDate = '';
  duration = '';
  budget = '';
  revenue = '';
  genres: string[] = [];

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.overview = this.data.overview;
      this.releaseDate = this.data.release_date;
      this.duration = `${this.data.runtime / 60}`;
      this.genres = this.data.genres.map(el => el.name);
      [this.budget, this.revenue] = [this.data.budget, this.data.revenue].map(
        this.transformCurrency.bind(this)
      );
      this.duration = this.transformDuration(this.data.runtime);
    }
  }

  private transformCurrency(amount: number): string {
    return (
      this.currencyPipe
        .transform(amount, 'USD', undefined, '0.0-0')
        ?.replace(/,/g, ' ')
        .replace('$', '$ ') || ''
    );
  }

  private transformDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}:${minutes}`;
  }
}

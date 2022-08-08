import { Component, Input, OnInit } from '@angular/core';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent implements OnInit {
  @Input() genreIds: number[] = [];
  genres: string[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit() {
    this.genres = this.genreIds.map(id => this.genreService.getGenre(id));
  }
}

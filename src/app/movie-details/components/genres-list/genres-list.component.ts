import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent {
  @Input() public genres: string[] = [];
}

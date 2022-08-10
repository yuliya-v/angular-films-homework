import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() data?: Image;
  image: string = '';
  baseLink = 'https://image.tmdb.org/t/p/w185//';

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.image = this.baseLink + this.data.file_path;
    }
  }
}

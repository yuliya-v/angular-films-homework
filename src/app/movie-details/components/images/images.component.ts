import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/image.model';
import { imagesData } from 'src/app/data/images';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  @Input() data: Image[] = [];

  constructor() {}
}

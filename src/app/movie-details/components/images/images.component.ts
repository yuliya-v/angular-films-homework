import { Component, Input } from '@angular/core';
import { Image } from 'src/app/core/models/image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  @Input() data: Image[] = [];
}

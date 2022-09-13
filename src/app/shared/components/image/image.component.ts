import { Component, Input, OnInit } from '@angular/core';
import { ImageService, ImageSize } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() public imagePath?: string;
  @Input() public size: ImageSize = ImageSize.Small;
  @Input() public alt: string = '#';
  @Input() public icon?: string;
  public src: string = '';

  constructor(private imageService: ImageService) {}

  public ngOnInit(): void {
    if (this.imagePath) {
      this.src = this.imageService.getImage(this.imagePath, this.size);
    }
  }
}

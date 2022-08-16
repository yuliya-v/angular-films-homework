import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() imagePath?: string;
  @Input() size: 'small' | 'large' = 'small';
  @Input() alt: string = '#';
  @Input() icon?: string;
  public src: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    if (this.imagePath) {
      this.src = this.imageService.getImage(this.imagePath, this.size);
    }
  }
}

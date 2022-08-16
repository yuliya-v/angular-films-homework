import { Component, Input, OnInit } from '@angular/core';
import { ActorPhoto } from 'src/app/core/models/actor-photo';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-actor-photos',
  templateUrl: './actor-photos.component.html',
  styleUrls: ['./actor-photos.component.scss'],
})
export class ActorPhotosComponent {
  @Input() data: ActorPhoto[] = [];

  constructor(private imageService: ImageService) {}

  public getSrc(path: string): string {
    return this.imageService.getImage(path, 'small');
  }
}

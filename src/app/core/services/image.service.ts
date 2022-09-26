import { Injectable } from '@angular/core';

const BASE_LINK = 'https://image.tmdb.org/t/p/';

export enum ImageSize {
  Small = 'Small',
  Large = 'Large',
}

enum ImageSizePath {
  Small = 'w185//',
  Large = 'w300//',
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public getImage(path: string, size: ImageSize = ImageSize.Small): string {
    return BASE_LINK + ImageSizePath[size] + path;
  }
}

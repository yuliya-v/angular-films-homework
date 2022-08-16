import { Injectable } from '@angular/core';

const BASE_LINK = 'https://image.tmdb.org/t/p/';

enum ImageSizePath {
  small = 'w185//',
  large = 'w300//',
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public getImage(path: string, size: keyof typeof ImageSizePath): string {
    return BASE_LINK + ImageSizePath[size] + path;
  }
}

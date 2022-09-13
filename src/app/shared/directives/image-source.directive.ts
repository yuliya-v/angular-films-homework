import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImageSource]',
})
export class ImageSourceDirective implements OnInit {
  @Input() public appImageSource?: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.visibility = 'hidden';
  }

  public ngOnInit(): void {
    if (this.appImageSource) {
      this.el.nativeElement.src = this.appImageSource;
      this.el.nativeElement.onload = () => {
        this.el.nativeElement.style.visibility = 'visible';
      };
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() public totalPages: number = 0;
  @Input() public selectedPage: number = 1;
  public pages: number[] = [];
  private readonly MAX_VISIBLE_PAGES_NUMBER = 5;

  public ngOnInit() {
    const pagesNumber =
      this.totalPages < this.MAX_VISIBLE_PAGES_NUMBER
        ? this.totalPages
        : this.MAX_VISIBLE_PAGES_NUMBER;
    const halfPagesNum = Math.trunc(this.MAX_VISIBLE_PAGES_NUMBER / 2);
    const start = this.selectedPage <= halfPagesNum ? 1 : this.selectedPage - halfPagesNum;
    this.pages = Array(pagesNumber)
      .fill('')
      .map((_, ind) => start + ind);
  }
}

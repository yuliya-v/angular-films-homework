import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() public totalPages: number = 0;
  @Output() public pageSelectEvent = new EventEmitter<number>();
  public currentPages: number[] = [];
  public selectedPage: number = 1;
  private readonly MAX_VISIBLE_PAGES_NUMBER = 5;

  public ngOnInit() {
    const currentPagesNumber =
      this.totalPages < this.MAX_VISIBLE_PAGES_NUMBER
        ? this.totalPages
        : this.MAX_VISIBLE_PAGES_NUMBER;
    this.currentPages = Array(currentPagesNumber)
      .fill('')
      .map((_, ind) => ind + 1);
  }

  public selectPage(pageNumber: number) {
    if (pageNumber === this.selectedPage) return;
    this.pageSelectEvent.emit(pageNumber);
    this.selectedPage = pageNumber;
    this.repaint();
  }

  public repaint() {
    const halfPagesNum = Math.trunc(this.MAX_VISIBLE_PAGES_NUMBER / 2);
    const start = this.selectedPage <= halfPagesNum ? 1 : this.selectedPage - halfPagesNum;
    if (this.totalPages < this.MAX_VISIBLE_PAGES_NUMBER) return;
    if (this.totalPages - this.selectedPage < halfPagesNum) return;
    this.currentPages = this.currentPages.map((_, ind) => start + ind);
  }
}

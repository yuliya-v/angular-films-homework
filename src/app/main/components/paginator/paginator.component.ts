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
  public selectedPage: number = 0;
  private readonly MAX_VISIBLE_PAGES_NUMBER = 5;

  public ngOnInit() {
    const currentPagesNumber =
      this.totalPages < this.MAX_VISIBLE_PAGES_NUMBER
        ? this.totalPages
        : this.MAX_VISIBLE_PAGES_NUMBER;
    this.currentPages = Array(currentPagesNumber)
      .fill('')
      .map((_, ind) => ind + 1);
    this.selectedPage = this.currentPages.length ? 1 : 0;
  }

  public selectPage(pageNumber: number) {
    this.pageSelectEvent.emit(pageNumber);
    this.selectedPage = pageNumber;
  }
}

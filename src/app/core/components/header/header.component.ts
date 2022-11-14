import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public homePageLink?: string;
  private destroy$: Subject<boolean> = new Subject();
  constructor(private translate: TranslateService) {}

  public ngOnInit() {
    this.homePageLink = `/${this.translate.currentLang}/main/top/1`;
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.homePageLink = `/${e.lang}/main`;
    });
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

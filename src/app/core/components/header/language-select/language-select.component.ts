import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit, OnDestroy {
  public currentLang: FormControl<string | null> = new FormControl();
  public form: FormGroup = new FormGroup({
    lang: this.currentLang,
  });
  public langs: string[] = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public translateService: TranslateService) {}

  public ngOnInit() {
    this.langs = this.translateService.getLangs();
    this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(e => {
      this.currentLang.setValue(e.lang);
    });
    this.currentLang.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(lang => {
      if (lang) {
        this.translateService.use(lang);
      }
    });
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

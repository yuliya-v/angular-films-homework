import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit, OnDestroy {
  public currentLang = new FormControl<string>(this.translateService.currentLang);
  public form = new FormGroup({
    lang: this.currentLang,
  });
  public langs: string[] = [];
  private langSub!: Subscription;

  constructor(public translateService: TranslateService) {}

  public ngOnInit() {
    this.langs = this.translateService.getLangs();
    this.langSub = this.currentLang.valueChanges.subscribe(lang => {
      if (lang) {
        this.translateService.use(lang);
      }
    });
  }

  public ngOnDestroy() {
    this.langSub.unsubscribe();
  }
}

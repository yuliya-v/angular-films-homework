import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  public currentLang = new FormControl<string>(this.translateService.currentLang);
  public form = new FormGroup({
    lang: this.currentLang,
  });

  constructor(public translateService: TranslateService) {}

  public ngOnInit() {
    this.currentLang.valueChanges.subscribe(lang => {
      if (lang) this.translateService.use(lang);
    });
  }
}

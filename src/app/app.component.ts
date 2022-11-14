import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TRANSLATION_EN } from './core/i18n/en';
import { TRANSLATION_RU } from './core/i18n/ru';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public translate: TranslateService, private router: Router) {}

  public ngOnInit(): void {
    this.setTranslation();
    this.setRouter();
  }

  private setTranslation(): void {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setTranslation('en', TRANSLATION_EN);
    this.translate.setTranslation('ru', TRANSLATION_RU);
  }

  private setRouter(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
}

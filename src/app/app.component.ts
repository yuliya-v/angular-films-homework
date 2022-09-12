import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TRANSLATION_EN } from './core/i18n/en';
import { TRANSLATION_RU } from './core/i18n/ru';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-films-homework';
  currentPage: 'main' | 'movieDetails' | 'actorDetails' = 'main';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.setTranslation('en', TRANSLATION_EN);
    translate.setTranslation('ru', TRANSLATION_RU);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ru/) ? browserLang : 'en');
  }
}

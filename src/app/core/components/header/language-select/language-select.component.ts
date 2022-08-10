import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent {
  currentLang = new FormControl('EN');
  form = new FormGroup({
    lang: this.currentLang,
  });
  constructor() {}
}

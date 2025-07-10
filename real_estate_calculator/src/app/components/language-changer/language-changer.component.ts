import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'language-changer',
  standalone: true,
  templateUrl: './language-changer.component.html',
  styleUrl: './language-changer.component.scss',
  imports: [
    TranslateModule,
    MatButtonToggleModule
  ]
})
export class LanguageChangerComponent {
  currentLang: string = 'bg';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
  }

  toggleLang(value: string) {
    if (!value || value === this.currentLang) {
      return;
    }
    this.translate.use(value);
    this.currentLang = value;
  }
}
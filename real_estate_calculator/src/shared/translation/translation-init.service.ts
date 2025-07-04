import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { translations, LanguageCode } from './custom-translations';

@Injectable({ providedIn: 'root' })
export class TranslationInitService {
  constructor (private translate: TranslateService) {}

  init(lang: LanguageCode) {
    this.translate.setDefaultLang('bg');

    this.translate.use(lang).subscribe(() => {
      const custom = translations[lang];
      if (custom) {
        this.translate.setTranslation(lang, custom, true); // merge=true
      }
    });
  }
}

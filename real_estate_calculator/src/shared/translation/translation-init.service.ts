import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { translations, LanguageCode } from './custom-translations';
import { DEFAULT_LANGUAGE } from '../consts';

@Injectable({ providedIn: 'root' })
export class TranslationInitService {
  constructor(private readonly _translate: TranslateService) { }

  public init(lang: LanguageCode): void {
    this._translate.setDefaultLang(DEFAULT_LANGUAGE);

    this._translate.use(lang).subscribe(() => {
      const custom = translations[lang];
      if (custom) {
        this._translate.setTranslation(lang, custom, true); // merge=true
      }
    });
  }
}

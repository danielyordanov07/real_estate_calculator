import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTabComponent } from "./components/main-tab/main-tab.component";
import { TranslationInitService } from '../shared/translation/translation-init.service';
import { LanguageCode } from '../shared/translation/custom-translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, MainTabComponent]
})
export class AppComponent {
  title = 'Real Estate Calculator';

  constructor(private readonly _translationInitService: TranslationInitService) {
    const browserLang = navigator.language.split('-')[0] as LanguageCode; // 'en'
    const lang: LanguageCode = ['en', 'bg'].includes(browserLang) ? browserLang : 'en' as LanguageCode;
    this._translationInitService.init(lang);
  }
}
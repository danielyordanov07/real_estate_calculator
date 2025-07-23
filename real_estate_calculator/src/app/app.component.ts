import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTabComponent } from "./components/main-tab/main-tab.component";
import { TranslationInitService } from '../shared/translation/translation-init.service';
import { DEFAULT_LANGUAGE } from '../shared/consts';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    MainTabComponent,
    HeaderComponent
]
})
export class AppComponent {
  title = 'Real Estate Calculator';

  constructor(
    private readonly _translationInitService: TranslationInitService,
  ) {
    this._translationInitService.init(DEFAULT_LANGUAGE);
  }
}
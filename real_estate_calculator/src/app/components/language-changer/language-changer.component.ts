import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-language-changer',
  standalone: true,
  templateUrl: './language-changer.component.html',
  styleUrl: './language-changer.component.scss',
  imports: [
    TranslateModule,
    TranslatePipe
  ]
})
export class LanguageChangerComponent {
  constructor(private translate: TranslateService) {}

  toggleLang() {
    const current = this.translate.currentLang || 'en';
    const next = current === 'en' ? 'bg' : 'en';
    this.translate.use(next);
  }
}

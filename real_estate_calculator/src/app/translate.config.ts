import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslations = [
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: provideHttpClient,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  )
];
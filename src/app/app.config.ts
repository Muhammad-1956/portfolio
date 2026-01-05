import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { MatPaginatorIntl } from '@angular/material/paginator';

// Export for Angular Pagination
export function customPaginatorIntl() {
  const paginator = new MatPaginatorIntl();
  paginator.itemsPerPageLabel = 'Samples per page';
  paginator.nextPageLabel = 'Next';
  paginator.previousPageLabel = 'Previous';
  return paginator;
}
export function HttpLoaderFactory(http: HttpClient) {
  // NO arguments in the constructor
  return new TranslateHttpLoader();
}
// Provide TranslateHttpLoader config
const translateLoaderConfig = {
  prefix: './assets/i18n/',
  suffix: '.json'
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useClass: TranslateHttpLoader,
          deps: [HttpClient]
        }
      })
    ),
      ...((TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateHttpLoader },
      defaultLanguage: 'en'
    }).providers) ?? []),
    // Provide the loader config
    { provide: TRANSLATE_HTTP_LOADER_CONFIG, useValue: translateLoaderConfig }
  ]
};

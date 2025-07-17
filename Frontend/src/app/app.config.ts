import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // ✅ Automatically uses all @Injectable interceptors (like AuthInterceptor)
    provideHttpClient(withInterceptorsFromDi())
  ]
};

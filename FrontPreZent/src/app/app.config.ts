import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { appRoutesProvider } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Para chamadas HTTP
    appRoutesProvider // Inclui as rotas na configuração
  ]
};

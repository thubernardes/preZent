import { Routes, provideRouter } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { GerarQrcodeComponent } from './gerar-qrcode/gerar-qrcode.component';
import { ScanearQrcodeComponent } from './scanear-qrcode/scanear-qrcode.component';
import { HomeProfComponent } from './home-prof/home-prof.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gerar-qrcode', component: GerarQrcodeComponent },
  { path: 'scanear-qrcode', component: ScanearQrcodeComponent },
  { path: 'home-prof', component: HomeProfComponent },
];

export const appRoutesProvider = provideRouter(routes);

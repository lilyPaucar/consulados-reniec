import { Routes } from '@angular/router';
import { ConsuladosComponent } from './pages/consulados/consulados';
import { HomeComponent } from './pages/home/home';
import { LocalizacionComponent } from './pages/localizacion/localizacion';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'localizacion', component: LocalizacionComponent },
  { path: 'consulados', component: ConsuladosComponent },
  { path: '**', redirectTo: '' }
];

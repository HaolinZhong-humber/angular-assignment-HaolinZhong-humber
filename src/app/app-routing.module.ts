import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiDataComponent } from './pages/api-data/api-data.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form', component: FormComponent }
];

export const AppRoutingModule = provideRouter(routes);

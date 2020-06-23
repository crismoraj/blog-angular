import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//impotamos componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//Definimos rutas
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
];

//exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

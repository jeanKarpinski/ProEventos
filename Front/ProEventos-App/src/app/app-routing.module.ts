import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';


import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDatalheComponent } from './components/eventos/evento-datalhe/evento-datalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { ContatosComponent } from './components/contatos/contatos.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ],
  },
  { path: 'user/perfil', component: PerfilComponent },
  {
    path: 'eventos',
    redirectTo: 'eventos/lista',
  },
  {
    path: 'eventos',
    component: EventosComponent,
    children: [
      { path: 'detalhe/:id', component: EventoDatalheComponent },
      { path: 'detalhe', component: EventoDatalheComponent },
      { path: 'lista', component: EventoListaComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'Dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

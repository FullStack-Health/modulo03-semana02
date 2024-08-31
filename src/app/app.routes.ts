import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConvertMoneyPipe } from './pipes/convert-money.pipe';
import { LoginComponent } from './pages/login/login.component';
import { ConverterPipePageComponent } from './pages/converter-pipe-page/converter-pipe-page.component';
import { Aula02Component } from './pages/aula02/aula02.component';
import { Aula03Component } from './pages/aula03/aula03.component';
import { DetalharPacienteComponent } from './pages/detalhar-paciente/detalhar-paciente.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'aula01', component: ConverterPipePageComponent },
    { path: 'aula02', component: Aula02Component },
    { path: 'aula03', component: Aula03Component },
    { path: 'revisao/paciente/:id', component: DetalharPacienteComponent }
];



import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConvertMoneyPipe } from './pipes/convert-money.pipe';
import { LoginComponent } from './pages/login/login.component';
import { ConverterPipePageComponent } from './pages/converter-pipe-page/converter-pipe-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'aula01', component: ConverterPipePageComponent },
];

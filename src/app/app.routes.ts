import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'About', component: AboutComponent, title:'About Mateify'},
    {path:'404', component: NotFoundComponent, title:'Mateify | Not Found'},
    {path:'**', redirectTo:'404'}
];

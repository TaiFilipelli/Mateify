import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Page404 } from './pages/404/404.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    { path:'', component: HomeComponent, title:'Mateify' },
    { path:'movies', component:MoviesComponent, title:'Mateify | Movies' },
    { path:'about', component:AboutComponent, title:'About Mateify' },
    { path:'404', component:Page404, title:'Page not Found' },
    { path:'**', redirectTo:'404' }
];

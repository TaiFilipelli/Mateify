import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faClapperboard, faInfo, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  theme:string = 'light';
  constructor(private themeService:ThemeService){}

  ngOnInit():void{
    this.setThemeFlag();
  }

  toggleTheme():void{
    this.themeService.toggleTheme();
    this.setThemeFlag();
  }
  private setThemeFlag():void{
    const isDarkMode:boolean = document.documentElement.classList.contains('dark');
    this.theme = isDarkMode ? 'light' : 'dark';
  }

  faClapperboard = faClapperboard;
  faInfo = faInfo;
  faMoon = faMoon;
  faSun = faSun
}

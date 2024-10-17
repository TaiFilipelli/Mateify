import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { BentogridComponent } from '../../components/bentogrid/bentogrid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BentogridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

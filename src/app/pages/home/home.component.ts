import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { BentogridComponent } from '../../components/bentogrid/bentogrid.component';
import { GlassSectionComponent } from '../../components/glass-section/glass-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BentogridComponent, GlassSectionComponent],
  template:`
  <section>
    <app-hero></app-hero>
    <app-bentogrid></app-bentogrid>
    <h1>Not your style? Don't worry, we got you covered.</h1>
    <app-glass-section></app-glass-section>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

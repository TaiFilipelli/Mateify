import { Component, Input } from '@angular/core';
import { Movie, Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie!:Result;


}

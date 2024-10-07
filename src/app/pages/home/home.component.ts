import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie, Result } from '../../interfaces/movie.interface';
import { Observable } from 'rxjs';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  movies: Result[]=[];

  constructor(private moviesService: MoviesService) { }

    ngOnInit() {
      this.moviesService.getMovies().subscribe({
        next: (response) => {
          this.movies = response.results;
          console.log(this.movies);
        },
        error: (err) => console.error(err)
      });
  }
}

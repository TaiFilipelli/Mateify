import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie, Result } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  API_KEY='ff1bf13a25e2761c9e4d0143e3d1d092'

  //KEY DE LECTURA
  private API_KEY_READ = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjFiZjEzYTI1ZTI3NjFjOWU0ZDAxNDNlM2QxZDA5MiIsIm5iZiI6MTcyODI0OTA3OC40MTM5NzUsInN1YiI6IjY3MDJmYzVhZjg3OGFkZmVkMDg1Yjk0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mI_o9KbsorkK_XthOUfBDQgHCqdd5gTzRrlL5HjJQVU'
  private baseUrl:string = 'https://api.themoviedb.org/3/movie/popular?api_key=ff1bf13a25e2761c9e4d0143e3d1d092&language=es-ES&page=1';

  constructor(private http: HttpClient) { }

    getMovies() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+this.API_KEY
      });
    return this.http.get<Movie>(this.baseUrl, {headers});
  }
}

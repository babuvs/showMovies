import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  moviesList = [];
  ngOnInit(): void {
    this.getMovies();
  }

  // tslint:disable-next-line: typedef
  async getMovies() {
    try {
      const data = await this.movieService.getMovies();
      this.moviesList = data.data || [];
    } catch (e) {
      console.log(e);
    }
  }

}

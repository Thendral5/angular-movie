import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../movie.service';
import { movielist } from "../../mock/movie-list";
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:any;
  selMovie:any;
  @Output() movieSelected = new EventEmitter();
  constructor(private movieService: MovieService) {
   }

  ngOnInit() {
     this.movies = movielist["list"];
     this.selMovie = this.selectMovie(movielist["list"][0]);
     this.movieService.movieSelected.subscribe((movie) => {
        this.selMovie = movie;
      });

  }

  selectMovie(selectedMovie){
    this.movieService.setSelectedMovie(selectedMovie)
  }

}

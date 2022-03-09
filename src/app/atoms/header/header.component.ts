import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedMovie: any;
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    	this.movieService.movieSelected.subscribe((movie) => {
        this.selectedMovie = movie;
      });
  }

}

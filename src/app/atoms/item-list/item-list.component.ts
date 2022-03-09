import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

@Input('movie') movie;
@Input('selected') selected;
constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log(this.selected);
  }

  selectMovie = (selectedMovie) => {
    this.movieService.setSelectedMovie(selectedMovie);
  }

}

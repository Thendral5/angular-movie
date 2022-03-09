import { Injectable,Output,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movielist } from "./mock/movie-list";


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  @Output() movieSelected = new EventEmitter();
  constructor(private httpService: HttpClient) {
  }
  getMovies() {
    return movielist;
  }
  setSelectedMovie(selMovie){
    this.movieSelected.emit(selMovie);
  }

}

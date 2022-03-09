import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit on click', () => {
   const fixture = TestBed.createComponent(MovieService);
   const component = fixture.componentInstance;
   spyOn(component.movieSelected, 'emit');

  let obj = {
    "id": "1",
    "Title": "Kung fu panda",
    "cast": "Jack black, Jakie chen",
    "director": "Mark osborne",
    "genre": "Family/Comedy ",
    "image":
      "https://image.freepik.com/free-vector/pandas-concept-illustration_114360-7484.jpg?w=996"
  }
   expect(component.movieSelected.emit).toHaveBeenCalledWith(obj);
});
});

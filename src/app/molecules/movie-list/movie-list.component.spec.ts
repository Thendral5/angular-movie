import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieService } from '../../movie.service';
import { movielist } from "../../mock/movie-list";
import { MovieListComponent } from './movie-list.component';
import { Observable } from 'rxjs/Observable';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieService = fixture.debugElement.injector.get(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.selectMovie();
  });

  it('Should call selectMovie, movieService - resolved with movie list Response', () => {
    spyOn(movieService, 'movieSelected').and.returnValue(Observable.of({ movielist }));
    component.selectMovie();
    expect(movieService.movieSelected).toHaveBeenCalled();
  });

  it('Should call selectMovie, movieService - resolved with empty Response', () => {
    spyOn(movieService, 'movieSelected').and.returnValue(Observable.of({ }));
    component.selectMovie();
    expect(movieService.movieSelected).toHaveBeenCalled();
  });

  it('Should call selectMovie, movieService - resolved with error', () => {
    spyOn(movieService, 'movieSelected').and.returnValue(Observable.throw({"code": "500"}));
    component.selectMovie();
    expect(movieService.movieSelected).toHaveBeenCalled();
  });

});

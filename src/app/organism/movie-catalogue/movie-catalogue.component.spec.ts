import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCatalogueComponent } from './movie-catalogue.component';

describe('MovieCatalogueComponent', () => {
  let component: MovieCatalogueComponent;
  let fixture: ComponentFixture<MovieCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

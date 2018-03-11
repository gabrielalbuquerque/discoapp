import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiscoComponent } from './search-disco.component';

describe('SearchDiscoComponent', () => {
  let component: SearchDiscoComponent;
  let fixture: ComponentFixture<SearchDiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

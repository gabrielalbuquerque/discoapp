import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscoComponent } from './add-disco.component';

describe('AddDiscoComponent', () => {
  let component: AddDiscoComponent;
  let fixture: ComponentFixture<AddDiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

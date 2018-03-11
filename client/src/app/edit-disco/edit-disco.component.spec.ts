import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiscoComponent } from './edit-disco.component';

describe('EditDiscoComponent', () => {
  let component: EditDiscoComponent;
  let fixture: ComponentFixture<EditDiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

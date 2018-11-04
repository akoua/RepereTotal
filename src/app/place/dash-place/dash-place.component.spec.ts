import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPlaceComponent } from './dash-place.component';

describe('DashPlaceComponent', () => {
  let component: DashPlaceComponent;
  let fixture: ComponentFixture<DashPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

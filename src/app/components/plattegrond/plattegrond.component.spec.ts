import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlattegrondComponent } from './plattegrond.component';

describe('PlattegrondComponent', () => {
  let component: PlattegrondComponent;
  let fixture: ComponentFixture<PlattegrondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlattegrondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlattegrondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

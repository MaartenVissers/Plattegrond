import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweedeverdiepingComponent } from './tweedeverdieping.component';

describe('TweedeverdiepingComponent', () => {
  let component: TweedeverdiepingComponent;
  let fixture: ComponentFixture<TweedeverdiepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweedeverdiepingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweedeverdiepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuimtedetailsComponent } from './ruimtedetails.component';

describe('RuimtedetailsComponent', () => {
  let component: RuimtedetailsComponent;
  let fixture: ComponentFixture<RuimtedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuimtedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuimtedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

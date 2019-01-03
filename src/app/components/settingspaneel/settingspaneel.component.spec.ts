import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingspaneelComponent } from './settingspaneel.component';

describe('SettingspaneelComponent', () => {
  let component: SettingspaneelComponent;
  let fixture: ComponentFixture<SettingspaneelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingspaneelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingspaneelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

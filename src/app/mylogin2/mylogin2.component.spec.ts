import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mylogin2Component } from './mylogin2.component';

describe('Mylogin2Component', () => {
  let component: Mylogin2Component;
  let fixture: ComponentFixture<Mylogin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mylogin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mylogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

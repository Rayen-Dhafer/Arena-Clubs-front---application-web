import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckregisterComponent } from './checkregister.component';

describe('CheckregisterComponent', () => {
  let component: CheckregisterComponent;
  let fixture: ComponentFixture<CheckregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

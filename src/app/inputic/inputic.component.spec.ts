import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputicComponent } from './inputic.component';

describe('InputicComponent', () => {
  let component: InputicComponent;
  let fixture: ComponentFixture<InputicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

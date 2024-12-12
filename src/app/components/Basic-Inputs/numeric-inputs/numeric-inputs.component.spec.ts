import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericInputsComponent } from './numeric-inputs.component';

describe('NumericInputsComponent', () => {
  let component: NumericInputsComponent;
  let fixture: ComponentFixture<NumericInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputsComponent } from './text-inputs.component';

describe('TextInputsComponent', () => {
  let component: TextInputsComponent;
  let fixture: ComponentFixture<TextInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBasicInputsComponent } from './main-basic-inputs.component';

describe('MainBasicInputsComponent', () => {
  let component: MainBasicInputsComponent;
  let fixture: ComponentFixture<MainBasicInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBasicInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBasicInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

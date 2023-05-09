import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountFormComponent } from './add-discount-form.component';

describe('AddDiscountFormComponent', () => {
  let component: AddDiscountFormComponent;
  let fixture: ComponentFixture<AddDiscountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscountFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDiscountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

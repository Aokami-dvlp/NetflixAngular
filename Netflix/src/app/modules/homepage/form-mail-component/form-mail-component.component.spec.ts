import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMailComponentComponent } from './form-mail-component.component';

describe('FormMailComponentComponent', () => {
  let component: FormMailComponentComponent;
  let fixture: ComponentFixture<FormMailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

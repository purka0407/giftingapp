import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutbarcodeComponent } from './withoutbarcode.component';

describe('WithoutbarcodeComponent', () => {
  let component: WithoutbarcodeComponent;
  let fixture: ComponentFixture<WithoutbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutbarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

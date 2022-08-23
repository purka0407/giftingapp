import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithbarcodeComponent } from './withbarcode.component';

describe('WithbarcodeComponent', () => {
  let component: WithbarcodeComponent;
  let fixture: ComponentFixture<WithbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithbarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

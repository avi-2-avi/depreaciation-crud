import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFacturaComponent } from './cv-factura.component';

describe('CvFacturaComponent', () => {
  let component: CvFacturaComponent;
  let fixture: ComponentFixture<CvFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

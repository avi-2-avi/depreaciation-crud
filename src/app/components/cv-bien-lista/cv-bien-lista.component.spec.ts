import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBienListaComponent } from './cv-bien-lista.component';

describe('CvBienListaComponent', () => {
  let component: CvBienListaComponent;
  let fixture: ComponentFixture<CvBienListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvBienListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvBienListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleganteComponent } from './elegante.component';

describe('Elegante', () => {
  let component: EleganteComponent;
  let fixture: ComponentFixture<EleganteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleganteComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleganteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

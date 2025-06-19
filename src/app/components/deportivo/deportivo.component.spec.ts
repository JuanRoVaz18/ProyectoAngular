import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportivoComponent } from './deportivo.component';

describe('Deportivo', () => {
  let component: DeportivoComponent;
  let fixture: ComponentFixture<DeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeportivoComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


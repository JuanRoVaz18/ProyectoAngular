import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasualComponent } from './casual.component';

describe('Casual', () => {
  let component: CasualComponent;
  let fixture: ComponentFixture<CasualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


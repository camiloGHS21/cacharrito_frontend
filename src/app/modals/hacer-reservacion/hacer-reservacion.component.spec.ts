import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerReservacionComponent } from './hacer-reservacion.component';

describe('HacerReservacionComponent', () => {
  let component: HacerReservacionComponent;
  let fixture: ComponentFixture<HacerReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HacerReservacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HacerReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

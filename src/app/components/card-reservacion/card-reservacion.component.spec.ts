import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReservacionComponent } from './card-reservacion.component';

describe('CardReservacionComponent', () => {
  let component: CardReservacionComponent;
  let fixture: ComponentFixture<CardReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReservacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

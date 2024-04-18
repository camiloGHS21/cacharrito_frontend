import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReservacionesComponent } from './registrar-reservaciones.component';

describe('RegistrarReservacionesComponent', () => {
  let component: RegistrarReservacionesComponent;
  let fixture: ComponentFixture<RegistrarReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarReservacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

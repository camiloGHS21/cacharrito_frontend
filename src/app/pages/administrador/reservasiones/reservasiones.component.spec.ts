import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasionesComponent } from './reservasiones.component';

describe('ReservasionesComponent', () => {
  let component: ReservasionesComponent;
  let fixture: ComponentFixture<ReservasionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

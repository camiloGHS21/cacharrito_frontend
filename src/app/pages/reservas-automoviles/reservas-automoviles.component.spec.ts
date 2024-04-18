import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasAutomovilesComponent } from './reservas-automoviles.component';

describe('ReservasAutomovilesComponent', () => {
  let component: ReservasAutomovilesComponent;
  let fixture: ComponentFixture<ReservasAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasAutomovilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

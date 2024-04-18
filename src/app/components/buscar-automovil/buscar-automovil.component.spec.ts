import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAutomovilComponent } from './buscar-automovil.component';

describe('BuscarAutomovilComponent', () => {
  let component: BuscarAutomovilComponent;
  let fixture: ComponentFixture<BuscarAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarAutomovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

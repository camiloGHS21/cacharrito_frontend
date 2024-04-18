import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionAdministradorComponent } from './navegacion-administrador.component';

describe('NavegacionAdministradorComponent', () => {
  let component: NavegacionAdministradorComponent;
  let fixture: ComponentFixture<NavegacionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegacionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

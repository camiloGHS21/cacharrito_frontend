import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAutomovilesComponent } from './modal-automoviles.component';

describe('ModalAutomovilesComponent', () => {
  let component: ModalAutomovilesComponent;
  let fixture: ComponentFixture<ModalAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAutomovilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

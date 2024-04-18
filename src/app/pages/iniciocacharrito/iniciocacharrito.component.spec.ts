import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocacharritoComponent } from './iniciocacharrito.component';

describe('IniciocacharritoComponent', () => {
  let component: IniciocacharritoComponent;
  let fixture: ComponentFixture<IniciocacharritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciocacharritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciocacharritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

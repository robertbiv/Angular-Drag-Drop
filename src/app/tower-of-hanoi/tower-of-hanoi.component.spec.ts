import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerOfHanoiComponent } from './tower-of-hanoi.component';

describe('TowerOfHanoiComponent', () => {
  let component: TowerOfHanoiComponent;
  let fixture: ComponentFixture<TowerOfHanoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerOfHanoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TowerOfHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

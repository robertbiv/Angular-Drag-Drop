import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingGameComponent } from './sliding-game.component';

describe('SlidingGameComponent', () => {
  let component: SlidingGameComponent;
  let fixture: ComponentFixture<SlidingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

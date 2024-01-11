import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCartComponent } from './small-cart.component';

describe('SmallCartComponent', () => {
  let component: SmallCartComponent;
  let fixture: ComponentFixture<SmallCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

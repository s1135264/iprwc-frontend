import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCartWidgetComponent } from './dashboard-cart-widget.component';

describe('DashboardCartWidgetComponent', () => {
  let component: DashboardCartWidgetComponent;
  let fixture: ComponentFixture<DashboardCartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCartWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

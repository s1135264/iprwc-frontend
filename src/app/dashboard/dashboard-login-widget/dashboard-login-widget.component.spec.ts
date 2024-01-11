import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoginWidgetComponent } from './dashboard-login-widget.component';

describe('DashboardLoginWidgetComponent', () => {
  let component: DashboardLoginWidgetComponent;
  let fixture: ComponentFixture<DashboardLoginWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLoginWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardLoginWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

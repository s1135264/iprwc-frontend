import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRandomItemWidgetComponent } from './dashboard-random-item-widget.component';

describe('DashboardRandomItemWidgetComponent', () => {
  let component: DashboardRandomItemWidgetComponent;
  let fixture: ComponentFixture<DashboardRandomItemWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRandomItemWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardRandomItemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

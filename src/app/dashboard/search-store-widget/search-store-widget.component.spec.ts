import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStoreWidgetComponent } from './search-store-widget.component';

describe('SearchStoreWidgetComponent', () => {
  let component: SearchStoreWidgetComponent;
  let fixture: ComponentFixture<SearchStoreWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchStoreWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchStoreWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

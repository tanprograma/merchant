import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsNavigationComponent } from './statistics-navigation.component';

describe('StatisticsNavigationComponent', () => {
  let component: StatisticsNavigationComponent;
  let fixture: ComponentFixture<StatisticsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

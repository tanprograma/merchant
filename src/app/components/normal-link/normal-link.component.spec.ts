import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalLinkComponent } from './normal-link.component';

describe('NormalLinkComponent', () => {
  let component: NormalLinkComponent;
  let fixture: ComponentFixture<NormalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

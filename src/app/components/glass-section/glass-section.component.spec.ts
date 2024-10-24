import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassSectionComponent } from './glass-section.component';

describe('GlassSectionComponent', () => {
  let component: GlassSectionComponent;
  let fixture: ComponentFixture<GlassSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

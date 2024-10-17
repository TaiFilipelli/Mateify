import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentogridComponent } from './bentogrid.component';

describe('BentogridComponent', () => {
  let component: BentogridComponent;
  let fixture: ComponentFixture<BentogridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BentogridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BentogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

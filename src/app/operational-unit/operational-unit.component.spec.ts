import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalUnitComponent } from './operational-unit.component';

describe('OperationalUnitComponent', () => {
  let component: OperationalUnitComponent;
  let fixture: ComponentFixture<OperationalUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalUnitComponent]
    });
    fixture = TestBed.createComponent(OperationalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

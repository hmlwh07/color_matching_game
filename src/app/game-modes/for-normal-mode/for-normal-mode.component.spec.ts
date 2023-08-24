import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNormalModeComponent } from './for-normal-mode.component';

describe('ForNormalModeComponent', () => {
  let component: ForNormalModeComponent;
  let fixture: ComponentFixture<ForNormalModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForNormalModeComponent]
    });
    fixture = TestBed.createComponent(ForNormalModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

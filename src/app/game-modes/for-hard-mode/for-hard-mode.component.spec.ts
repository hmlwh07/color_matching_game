import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForHardModeComponent } from './for-hard-mode.component';

describe('ForHardModeComponent', () => {
  let component: ForHardModeComponent;
  let fixture: ComponentFixture<ForHardModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForHardModeComponent]
    });
    fixture = TestBed.createComponent(ForHardModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

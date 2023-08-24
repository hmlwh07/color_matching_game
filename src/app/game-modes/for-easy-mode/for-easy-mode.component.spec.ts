import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEasyModeComponent } from './for-easy-mode.component';

describe('ForEasyModeComponent', () => {
  let component: ForEasyModeComponent;
  let fixture: ComponentFixture<ForEasyModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForEasyModeComponent]
    });
    fixture = TestBed.createComponent(ForEasyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

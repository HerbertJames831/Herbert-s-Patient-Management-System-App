import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDateandtimeComponent } from './current-dateandtime.component';

describe('CurrentDateandtimeComponent', () => {
  let component: CurrentDateandtimeComponent;
  let fixture: ComponentFixture<CurrentDateandtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentDateandtimeComponent]
    });
    fixture = TestBed.createComponent(CurrentDateandtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

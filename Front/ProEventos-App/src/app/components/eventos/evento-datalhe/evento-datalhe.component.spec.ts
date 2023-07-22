import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDatalheComponent } from './evento-datalhe.component';

describe('EventoDatalheComponent', () => {
  let component: EventoDatalheComponent;
  let fixture: ComponentFixture<EventoDatalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoDatalheComponent]
    });
    fixture = TestBed.createComponent(EventoDatalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

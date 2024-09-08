import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDatalheComponent } from './evento-datalhe.component';

describe('EventoDatalheComponent', () => {
  let component: EventoDatalheComponent;
  let fixture: ComponentFixture<EventoDatalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoDatalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDatalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

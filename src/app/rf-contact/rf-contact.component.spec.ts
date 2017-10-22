import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfContactComponent } from './rf-contact.component';

describe('RfContactComponent', () => {
  let component: RfContactComponent;
  let fixture: ComponentFixture<RfContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

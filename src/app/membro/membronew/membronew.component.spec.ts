import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembronewComponent } from './membronew.component';

describe('MembronewComponent', () => {
  let component: MembronewComponent;
  let fixture: ComponentFixture<MembronewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembronewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembronewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

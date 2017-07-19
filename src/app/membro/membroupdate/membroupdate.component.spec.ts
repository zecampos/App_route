import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroupdateComponent } from './membroupdate.component';

describe('MembroupdateComponent', () => {
  let component: MembroupdateComponent;
  let fixture: ComponentFixture<MembroupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembroupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

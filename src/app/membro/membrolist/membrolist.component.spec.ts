import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrolistComponent } from './membrolist.component';

describe('MembrolistComponent', () => {
  let component: MembrolistComponent;
  let fixture: ComponentFixture<MembrolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

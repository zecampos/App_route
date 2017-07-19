import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelulalistComponent } from './celulalist.component';

describe('CelulalistComponent', () => {
  let component: CelulalistComponent;
  let fixture: ComponentFixture<CelulalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelulalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelulalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

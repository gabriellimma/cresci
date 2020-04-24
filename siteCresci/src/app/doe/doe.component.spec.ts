import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoeComponent } from './doe.component';

describe('DoeComponent', () => {
  let component: DoeComponent;
  let fixture: ComponentFixture<DoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

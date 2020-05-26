import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadeComponent } from './privacidade.component';

describe('PrivacidadeComponent', () => {
  let component: PrivacidadeComponent;
  let fixture: ComponentFixture<PrivacidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

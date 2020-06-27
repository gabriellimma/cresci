import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusprodutosComponent } from './meusprodutos.component';

describe('MeusprodutosComponent', () => {
  let component: MeusprodutosComponent;
  let fixture: ComponentFixture<MeusprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

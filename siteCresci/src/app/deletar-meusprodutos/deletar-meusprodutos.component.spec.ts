import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarMeusprodutosComponent } from './deletar-meusprodutos.component';

describe('DeletarMeusprodutosComponent', () => {
  let component: DeletarMeusprodutosComponent;
  let fixture: ComponentFixture<DeletarMeusprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarMeusprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarMeusprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

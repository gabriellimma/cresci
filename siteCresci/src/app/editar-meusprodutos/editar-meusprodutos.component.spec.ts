import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMeusprodutosComponent } from './editar-meusprodutos.component';

describe('EditarMeusprodutosComponent', () => {
  let component: EditarMeusprodutosComponent;
  let fixture: ComponentFixture<EditarMeusprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMeusprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMeusprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

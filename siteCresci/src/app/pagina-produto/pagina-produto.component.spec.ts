import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProdutoComponent } from './pagina-produto.component';

describe('PaginaProdutoComponent', () => {
  let component: PaginaProdutoComponent;
  let fixture: ComponentFixture<PaginaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

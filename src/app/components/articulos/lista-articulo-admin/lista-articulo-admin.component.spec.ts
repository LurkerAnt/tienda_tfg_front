import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticuloAdminComponent } from './lista-articulo-admin.component';

describe('ListaArticuloAdminComponent', () => {
  let component: ListaArticuloAdminComponent;
  let fixture: ComponentFixture<ListaArticuloAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArticuloAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticuloAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

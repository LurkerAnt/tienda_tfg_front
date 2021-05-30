import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPasswordUserComponent } from './cambiar-password-user.component';

describe('CambiarPasswordUserComponent', () => {
  let component: CambiarPasswordUserComponent;
  let fixture: ComponentFixture<CambiarPasswordUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarPasswordUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarPasswordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

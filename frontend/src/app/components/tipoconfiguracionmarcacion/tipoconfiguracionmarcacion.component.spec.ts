import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoconfiguracionmarcacionComponent } from './tipoconfiguracionmarcacion.component';

describe('TipoconfiguracionmarcacionComponent', () => {
  let component: TipoconfiguracionmarcacionComponent;
  let fixture: ComponentFixture<TipoconfiguracionmarcacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoconfiguracionmarcacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoconfiguracionmarcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

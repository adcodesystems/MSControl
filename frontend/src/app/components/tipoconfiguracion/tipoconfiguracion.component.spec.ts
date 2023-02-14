import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoconfiguracionComponent } from './tipoconfiguracion.component';

describe('TipoconfiguracionComponent', () => {
  let component: TipoconfiguracionComponent;
  let fixture: ComponentFixture<TipoconfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoconfiguracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoconfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

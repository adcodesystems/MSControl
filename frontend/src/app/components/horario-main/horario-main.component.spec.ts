import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioMainComponent } from './horario-main.component';

describe('HorarioMainComponent', () => {
  let component: HorarioMainComponent;
  let fixture: ComponentFixture<HorarioMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

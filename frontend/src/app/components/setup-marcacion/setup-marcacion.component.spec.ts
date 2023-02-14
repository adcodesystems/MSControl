import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMarcacionComponent } from './setup-marcacion.component';

describe('SetupMarcacionComponent', () => {
  let component: SetupMarcacionComponent;
  let fixture: ComponentFixture<SetupMarcacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupMarcacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupMarcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

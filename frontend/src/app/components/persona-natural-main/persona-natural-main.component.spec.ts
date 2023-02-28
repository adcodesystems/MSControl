import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNaturalMainComponent } from './persona-natural-main.component';

describe('PersonaNaturalMainComponent', () => {
  let component: PersonaNaturalMainComponent;
  let fixture: ComponentFixture<PersonaNaturalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaNaturalMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaNaturalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

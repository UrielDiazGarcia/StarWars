import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDetallePage } from './personajes-detalle.page';

describe('PersonajesDetallePage', () => {
  let component: PersonajesDetallePage;
  let fixture: ComponentFixture<PersonajesDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

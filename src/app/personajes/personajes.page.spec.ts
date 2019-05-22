import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesPage } from './personajes.page';

describe('PersonajesPage', () => {
  let component: PersonajesPage;
  let fixture: ComponentFixture<PersonajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

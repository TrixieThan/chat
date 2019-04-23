import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupcontrasPage } from './recupcontras.page';

describe('RecupcontrasPage', () => {
  let component: RecupcontrasPage;
  let fixture: ComponentFixture<RecupcontrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecupcontrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecupcontrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

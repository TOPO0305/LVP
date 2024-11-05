import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OmbligoPage } from './ombligo.page';

describe('OmbligoPage', () => {
  let component: OmbligoPage;
  let fixture: ComponentFixture<OmbligoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OmbligoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

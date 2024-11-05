import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TragusPage } from './tragus.page';

describe('TragusPage', () => {
  let component: TragusPage;
  let fixture: ComponentFixture<TragusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TragusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

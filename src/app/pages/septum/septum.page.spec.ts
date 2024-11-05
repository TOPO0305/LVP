import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeptumPage } from './septum.page';

describe('SeptumPage', () => {
  let component: SeptumPage;
  let fixture: ComponentFixture<SeptumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

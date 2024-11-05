import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonroePage } from './monroe.page';

describe('MonroePage', () => {
  let component: MonroePage;
  let fixture: ComponentFixture<MonroePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonroePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

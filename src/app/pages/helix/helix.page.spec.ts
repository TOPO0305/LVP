import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelixPage } from './helix.page';

describe('HelixPage', () => {
  let component: HelixPage;
  let fixture: ComponentFixture<HelixPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

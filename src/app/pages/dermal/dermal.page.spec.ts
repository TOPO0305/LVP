import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DermalPage } from './dermal.page';

describe('DermalPage', () => {
  let component: DermalPage;
  let fixture: ComponentFixture<DermalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DermalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

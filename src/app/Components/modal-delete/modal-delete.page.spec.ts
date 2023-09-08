import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDeletePage } from './modal-delete.page';

describe('ModalDeletePage', () => {
  let component: ModalDeletePage;
  let fixture: ComponentFixture<ModalDeletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalLinkMePage } from './modal-link-me.page';

describe('ModalLinkMePage', () => {
  let component: ModalLinkMePage;
  let fixture: ComponentFixture<ModalLinkMePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalLinkMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

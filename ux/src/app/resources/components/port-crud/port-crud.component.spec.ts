import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCRUDComponent } from './port-crud.component';

describe('PortCRUDComponent', () => {
  let component: PortCRUDComponent;
  let fixture: ComponentFixture<PortCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

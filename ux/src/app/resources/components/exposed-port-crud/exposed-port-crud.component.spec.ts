import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposedPortCRUDComponent } from './exposed-port-crud.component';

describe('ExposedPortCRUDComponent', () => {
  let component: ExposedPortCRUDComponent;
  let fixture: ComponentFixture<ExposedPortCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposedPortCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposedPortCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

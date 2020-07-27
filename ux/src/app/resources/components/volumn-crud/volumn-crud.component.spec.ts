import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumnCRUDComponent } from './volumn-crud.component';

describe('VolumnCRUDComponent', () => {
  let component: VolumnCRUDComponent;
  let fixture: ComponentFixture<VolumnCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumnCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumnCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTypesComponent } from './variable-types.component';

describe('VariableTypesComponent', () => {
  let component: VariableTypesComponent;
  let fixture: ComponentFixture<VariableTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

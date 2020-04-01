import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceWizardComponent } from './new-service-wizard.component';

describe('NewServiceWizardComponent', () => {
  let component: NewServiceWizardComponent;
  let fixture: ComponentFixture<NewServiceWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServiceWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServiceWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

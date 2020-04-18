import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocumentWizardComponent } from './new-document-wizard.component';

describe('NewDocumentWizardComponent', () => {
  let component: NewDocumentWizardComponent;
  let fixture: ComponentFixture<NewDocumentWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDocumentWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocumentWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

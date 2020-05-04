import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnvironmentDialogComponent } from './delete-environment-dialog.component';

describe('DeleteEnvironmentDialogComponent', () => {
  let component: DeleteEnvironmentDialogComponent;
  let fixture: ComponentFixture<DeleteEnvironmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEnvironmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnvironmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

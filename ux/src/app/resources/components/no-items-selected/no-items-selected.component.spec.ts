import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemsSelectedComponent } from './no-items-selected.component';

describe('NoItemsSelectedComponent', () => {
  let component: NoItemsSelectedComponent;
  let fixture: ComponentFixture<NoItemsSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoItemsSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoItemsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

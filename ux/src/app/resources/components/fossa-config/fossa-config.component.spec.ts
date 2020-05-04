import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FossaConfigComponent } from './fossa-config.component';

describe('FossaConfigComponent', () => {
  let component: FossaConfigComponent;
  let fixture: ComponentFixture<FossaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

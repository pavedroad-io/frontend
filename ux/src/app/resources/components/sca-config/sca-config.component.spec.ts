import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaConfigComponent } from './sca-config.component';

describe('ScaConfigComponent', () => {
  let component: ScaConfigComponent;
  let fixture: ComponentFixture<ScaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

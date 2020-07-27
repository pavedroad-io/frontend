import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoncarCloudConfigComponent } from './soncar-cloud-config.component';

describe('SoncarCloudConfigComponent', () => {
  let component: SoncarCloudConfigComponent;
  let fixture: ComponentFixture<SoncarCloudConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoncarCloudConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoncarCloudConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

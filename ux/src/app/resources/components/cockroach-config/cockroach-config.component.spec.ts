import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockroachConfigComponent } from './cockroach-config.component';

describe('CockroachConfigComponent', () => {
  let component: CockroachConfigComponent;
  let fixture: ComponentFixture<CockroachConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockroachConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockroachConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

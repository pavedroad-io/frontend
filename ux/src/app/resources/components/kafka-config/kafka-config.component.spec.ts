import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaConfigComponent } from './kafka-config.component';

describe('KafkaConfigComponent', () => {
  let component: KafkaConfigComponent;
  let fixture: ComponentFixture<KafkaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyConfigurationComponent } from './proxy-configuration.component';

describe('ProxyConfigurationComponent', () => {
  let component: ProxyConfigurationComponent;
  let fixture: ComponentFixture<ProxyConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

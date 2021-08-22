import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractDetailComponent } from './view-contract-detail.component';

describe('ViewContractDetailComponent', () => {
  let component: ViewContractDetailComponent;
  let fixture: ComponentFixture<ViewContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

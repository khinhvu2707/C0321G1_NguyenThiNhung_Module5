import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContractDetailComponent } from './dialog-contract-detail.component';

describe('DialogContractDetailComponent', () => {
  let component: DialogContractDetailComponent;
  let fixture: ComponentFixture<DialogContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

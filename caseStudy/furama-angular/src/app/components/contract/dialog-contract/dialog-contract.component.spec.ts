import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContractComponent } from './dialog-contract.component';

describe('DialogContractComponent', () => {
  let component: DialogContractComponent;
  let fixture: ComponentFixture<DialogContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

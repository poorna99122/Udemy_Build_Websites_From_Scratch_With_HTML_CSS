import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeNumberComponent } from './cheque-number.component';

describe('ChequeNumberComponent', () => {
  let component: ChequeNumberComponent;
  let fixture: ComponentFixture<ChequeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

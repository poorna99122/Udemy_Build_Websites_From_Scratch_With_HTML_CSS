import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { CHEQUE_NUMBER_MAXLENGTH, CHEQUE_NUMBER_MINLENGTH, CHEQUE_NUMBER_PATTERN } from '../../constants/base.constant';
import { BaseFpxControlComponent } from '../../utils/base-fpx-control.component';

@Component({
  selector: 'app-cheque-number',
  templateUrl: './cheque-number.component.html',
  styleUrls: ['./cheque-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChequeNumberComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChequeNumberComponent extends BaseFpxControlComponent {
  error: any
  regex = new RegExp("[0-9\b]+$");
  followKeydown(event) {
    console.log(event)
    this.error = event
  }

  constructor(
    private controlContainer: ControlContainer,
  ) {
    super(controlContainer);
  }

  override doPreInit(): void {
    this.addSyncValidatorFn(Validators.minLength(CHEQUE_NUMBER_MINLENGTH));
    this.addSyncValidatorFn(Validators.maxLength(CHEQUE_NUMBER_MAXLENGTH));
    this.addSyncValidatorFn(Validators.pattern(CHEQUE_NUMBER_PATTERN));
  }

}

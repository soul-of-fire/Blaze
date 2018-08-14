import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[rbConfirm]'
})
export class ConfirmDirective {
  @Output() rbConfirm = new EventEmitter<any>();

  constructor(private dialogService: DialogService) {
  }

  @HostListener('click', ['$event']) onClick($event) {
    $event.stopPropagation();
    this.dialogService.confirm('Confirm..', 'Are you sure?').then((result) => {
      if (result) {
        this.rbConfirm.emit();
      }
    }, (reason) => {
    });
  }
}

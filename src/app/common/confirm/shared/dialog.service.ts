import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from 'src/app/common/confirm/confirm/confirm.component';

@Injectable()
export class DialogService {

  constructor(private modalService: NgbModal) {
  }

  public confirm(title: string,
                 message: string,
                 btnOkText: string = 'Yes',
                 btnCancelText: string = 'No',
                 dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }

}

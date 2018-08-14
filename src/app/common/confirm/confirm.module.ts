import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from 'src/app/common/confirm/confirm/confirm.component';
import { DialogService } from 'src/app/common/confirm/shared/dialog.service';
import { ConfirmDirective } from 'src/app/common/confirm/shared/confirm.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConfirmDirective,
    ConfirmComponent
  ],
  providers: [
    DialogService
  ],
  exports: [
    ConfirmDirective,
    ConfirmComponent  
  ]
})
export class ConfirmModule { }

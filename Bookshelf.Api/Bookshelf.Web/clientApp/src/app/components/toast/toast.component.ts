import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  //@Input() public type: ToastType;
  //@Input() public message: string;
  //@Input() public popupRef: PopupRef;
  //public closeEvent = new EventEmitter();
  //public toastType = ToastType;

  ///*Labels*/
  //public labelToastError: string;
  //public labelToastWarning: string;
  //public labelToastInfo: string;

  //constructor(
  //  private commonSvc: CommonService,
  //  private sessionSvc: SessionService,
  //  private constantHelper: ConstantHelper
  //) {

  //  this.commonSvc.initializeLabels().then(
  //    result => {
  //      this.labelToastError = sessionSvc.getLabel(constantHelper.LBL_TOAST_ERROR);
  //      this.labelToastWarning = sessionSvc.getLabel(constantHelper.LBL_TOAST_WARNING);
  //      this.labelToastInfo = sessionSvc.getLabel(constantHelper.LBL_TOAST_INFO);
  //    },
  //    error => {
  //      console.error(error);
  //    });
  //}

  //public close(e: any) {
  //  this.closeEvent.emit(this.popupRef);
  //}



}

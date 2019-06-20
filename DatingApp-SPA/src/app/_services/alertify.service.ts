import { Injectable } from '@angular/core';
declare let alertify: any; // to avoid tslint error later we use service;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() {}

  confirm(message: string, okCallback: () => any) {
    alertify.success(message, function(e) {
      if (e) {
        okCallback();
      } else {
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.warning(message);
  }

  warning(message: string) {
    alertify.message(message);
  }
}

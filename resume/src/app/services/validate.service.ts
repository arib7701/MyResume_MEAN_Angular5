import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
  constructor() {}

  validateContact(message) {
    if (
      message.firstName === undefined ||
      message.lastName === undefined ||
      message.email === undefined ||
      message.mess === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

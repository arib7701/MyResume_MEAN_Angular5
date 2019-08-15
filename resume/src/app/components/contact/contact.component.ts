import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  mess: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private infoService: InformationService
  ) {}

  ngOnInit() {}

  sendMessageSubmit() {
    const message = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      mess: this.mess
    };

    if (!this.validateService.validateContact(message)) {
      this.flashMessage.show('Please fill at least your name/email & message', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    if (!this.validateService.validateEmail(message.email)) {
      this.flashMessage.show('Please use a valid email', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    this.infoService.sendEmail(message).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Message Sent', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        return true;
      } else {
        this.flashMessage.show('Error - Please Try again', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        return true;
      }
    });
  }
}

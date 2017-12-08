/*====================================================================================================================
 * File:
 *   peer-message.service.ts
 *
 * Comments:
 *   This service create a behavior subject in order for both the dice and pass phrase component to subscribe to
 *   and observe it. In this case both components will observe the current message but only the dice component
 *   will be able to not only subscribe but also make changes to the current message since the dice is the only
 *   one generating new words and the passphrase should only concerned in combining words to generate a passphrase.
 *
 *====================================================================================================================*/
import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class PeerMessageService {

  private messageSource = new BehaviorSubject<string>('')
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  publishMessage(passWord: string) {
    this.messageSource.next(passWord)
  }

}

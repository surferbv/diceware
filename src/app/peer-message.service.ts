import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class PeerMessageService {

  public msgPassphrase: string = "";

  private messageSource = new BehaviorSubject<string>('')
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  publishMessage(passWord: string) {
    this.msgPassphrase = passWord
    this.messageSource.next(passWord)
  }

}

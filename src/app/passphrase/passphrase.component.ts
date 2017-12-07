import {Component, OnInit } from '@angular/core';
import { PeerMessageService } from '../peer-message.service'

@Component({
  selector: 'app-passphrase',
  templateUrl: './passphrase.component.html',
  styleUrls: ['./passphrase.component.css'],
})
export class PassphraseComponent implements OnInit {
  title: string = "Make Passphrase";
  currentPassphrase: string = "";
  combinedPassphrase: string = "";

  constructor(private peerMessageService: PeerMessageService) { }//service dependency injection

  ngOnInit() {
    this.peerMessageService.currentMessage.subscribe(message => this.currentPassphrase = message)
  }

  savePhrase(){
    this.combinedPassphrase = this.combinedPassphrase.concat(" " + this.currentPassphrase);
  }

  clear(){
    this.currentPassphrase = "";
    this.combinedPassphrase = "";
  }
}

/*====================================================================================================================
* File:
*   dice.component.ts
*
* Comments:
*   This component uses two services one to accessing the data via a "DataService" and one to send the
*   word generated to the passphrase component using a "PeerMessageService". Only this component can
*   publish message to the "PeerMessageService" since we don't won't the passphrase component to modify
*   the message but rather read it and combined it with its phrase.
*
*====================================================================================================================*/
import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { PeerMessageService } from '../peer-message.service'

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
  providers: [DataService] //service
})
export class DiceComponent implements OnInit {

  title: string = "Roll Five Dice";
  dice: string = "";
  passphrase: string = "";
  passphraseData: Object;

  //Service dependency injection for two services data and peer message services
  constructor(private dataService: DataService, private peerMessageService: PeerMessageService){ }

  //Subscribes to data service when the component is initialized
  ngOnInit() {
    this.dataService.fetchData().subscribe((data) => this.passphraseData = data);
  }

  //Used to generate a random number representing one dice roll which is a helper function.
  diceRoller(): string{
    let res: number = 0;
    let min: number = 1;
    let max: number = 6;
    res = Math.floor(Math.random()*(max - min + 1)) + min;
    return res.toString();
  }

  //Combines each dice roll to generate a final five number digit
  rollFiveDice(): void{
    this.resetRoll();
    let i = 0;
    for ( i; i < 5; i++){
      let dieNum = this.diceRoller();
      this.dice = this.dice.concat(dieNum);
    }
  }
  //This gets and publishes the word from the json file to the peer message service so the passphrase component
  //has access to the new word
  getSetPassphrase(): void{
    this.passphrase = this.passphraseData[this.dice];
    this.peerMessageService.publishMessage(this.passphrase);
  }

  //This also clears the value of the published message so that each component have initial cleared word
  resetRoll(): void{
    this.dice = "";
    this.passphrase = "";
    this.peerMessageService.publishMessage("");
  }
}

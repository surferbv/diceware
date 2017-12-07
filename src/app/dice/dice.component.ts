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

  constructor(private dataService: DataService, private peerMessageService: PeerMessageService){ }//service dependency injection

  ngOnInit() {
    this.dataService.fetchData().subscribe((data) => this.passphraseData = data);
  }

  diceRoller(): string{
    let res: number = 0;
    let min: number = 1;
    let max: number = 6;
    res = Math.floor(Math.random()*(max - min + 1)) + min;
    return res.toString();
  }

  rollFiveDice(): void{
    this.resetRoll();
    let i = 0;
    for ( i; i < 5; i++){
      let dieNum = this.diceRoller();
      this.dice = this.dice.concat(dieNum);
    }
  }

  getSetPassphrase(): void{
    this.passphrase = this.passphraseData[this.dice];
    this.peerMessageService.publishMessage(this.passphrase);
  }

  resetRoll(): void{
    this.dice = "";
    this.passphrase = "";
    this.peerMessageService.publishMessage("");
  }

  getPassphrase(): void {
    this.passphrase = this.passphraseData[this.dice];
  }

  setPassphrase(): void{
    this.peerMessageService.publishMessage(this.passphrase);
  }


}

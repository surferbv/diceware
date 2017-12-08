/*====================================================================================================================
 * File:
 *   app.module.ts
 *
 * Comments:
 *   This module contains all the imports and providers for the components to function properly. The following
 *   imports and providers are added, HttpClientModule, DataService, and PeerMessageService
 *
 *====================================================================================================================*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { PassphraseComponent } from './passphrase/passphrase.component';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { PeerMessageService } from './peer-message.service';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    PassphraseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, PeerMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

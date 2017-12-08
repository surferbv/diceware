/*====================================================================================================================
 * File:
 *   data.service.ts
 *
 * Comments:
 *   This service fetches the data in the diceware-complete.json file and makes it available to what
 *   the component that subscribes to it. It is important that the location of the json file remain at
 *   "../assets/data/diceware-complete.json" which should be in the src folder. Without the file the dice component
 *   can not generate words to send to the passphrase component. It uses http to access the data and a map operator
 *   to map the object to a json format.
 *
 *====================================================================================================================*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(){
      return this.http.get('../assets/data/diceware-complete.json').map((res) => res);
    }
}

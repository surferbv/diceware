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

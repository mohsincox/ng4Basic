import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//npm install rxjs@6 rxjs-compat@6 --save
//ng update

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { }

  getDivisions() {
    return this.http.get('http://localhost/angular-test/ng.php')
      .map(res => res.json());
  }

}

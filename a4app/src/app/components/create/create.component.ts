import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: Http) { }

  divisionObj:object = {};

  addNewDivision = function(division) {
    this.divisionObj = {
      "name" : division.name 
    }
    this.http.post(`http://localhost/angular-test/ng_create.php?name=${this.name}`, this.divisionObj, {
      //console.log(this.divisionObj);
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
  }).subscribe((res:Response) => {
      console.log(res);
    });
  }

  

//   $http.post(url, data, {
//     headers : {
//         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
//     }
// });
  ngOnInit() {
  }

  //console.log('My object : ' + obj)

}

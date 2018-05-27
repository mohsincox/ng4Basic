import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  divisions:Division[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getDivisions().subscribe((divisions) => {
      this.divisions = divisions;
    });
  }

}
interface Division {
  id:number,
  name:string,
  created_at:string
}
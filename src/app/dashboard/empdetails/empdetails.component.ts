import { Component, OnInit } from '@angular/core';
import{DetailsService} from './details.service';
import {
  Http,
  Response
} from '@angular/http'; 

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  // baseUrl: string = 'https://jsonplaceholder.typicode.com';
  url='src/assets/employees.json'
  todos: any[];
  
  constructor(private http:Http) { }

  ngOnInit() {
    this.http
    .get(this.url)
    .map((res: Response) => res.json()) 
    .subscribe(todos => {this.todos = todos; console.log('khj',todos)}); 
  }
dataSource=[
  {name:'krishna', roll:'12', area:'wer'},
    {name:'krishna1', roll:'12', area:'wer'}

]

displayedColumns: string[] = ['name', 'roll', 'area'];
}

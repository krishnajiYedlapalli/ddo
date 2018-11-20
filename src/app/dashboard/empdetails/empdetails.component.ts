import { Component, OnInit } from "@angular/core";
import { DetailsService } from "./details.service";

import "rxjs/add/operator/map";
@Component({
  selector: "app-empdetails",
  templateUrl: "./empdetails.component.html",
  styleUrls: ["./empdetails.component.css"]
})
export class EmpdetailsComponent implements OnInit {
  empInformation;
  dataSource;
  constructor(private empdetails: DetailsService) {
    // subscribing the employee data
    this.empdetails.subject.subscribe(value => {
      this.dataSource = value;
      console.log(value, "ghhjg");
    });

    
  }

  ngOnInit() {
    setTimeout(()=>
       this.dataSource=this.dataSource.employee,0);
  }

  // dataSource=[
  //   {name:'krishna', roll:'12', area:'wer'},
  //     {name:'krishna1', roll:'12', area:'wer'}

  // ]

  displayedColumns: string[] = ["sno", "firstName", "lastName","emailId",'expDepartment','designation','joinDate','details'];
}

import { Injectable} from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Http, Response } from "@angular/http";
@Injectable()
export class DetailsService  {
  
 
 
  subject = new Subject();
  employeedata: any[];

  constructor(private http: Http) {
    //requesting data from json file
    this.http
      .get("assets/employees.json")
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.employeedata = data;
        // console.log(data);
      });

    // sending data to empdetails
    setTimeout(() => this.subject.next(this.employeedata), 0);
  }


}

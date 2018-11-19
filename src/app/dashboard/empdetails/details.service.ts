import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class DetailsService {

  constructor(private http:Http) {
    console.log('hi');
    var obj;
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
   }

   public getJSON(): Observable<any> {
    return this.http.get("employees.json")
                    .map((res:any) => res.json());

}

}

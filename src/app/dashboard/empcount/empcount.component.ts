import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empcount',
  templateUrl: './empcount.component.html',
  styleUrls: ['./empcount.component.css']
})
export class EmpcountComponent implements OnInit {
cardDetails=[
  {type:'Shadow Employee',
  count:'08',
  styleType:'#8359FF',
  image:'assets/Icons/Shadow Employee.svg'
  },
  {type:'Employee on Bench',
  count:'43',
  styleType:'#00D98F',
  image:'assets/Icons/Employee on Bench.svg'
  },
  {type:'Non Billable Employee',
  count:'21',
  styleType:'#008EFF',
  image:'assets/Icons/Non Billable Employee.svg'
  },
  {type:'Total Employees',
  count:'15',
  styleType:'#FFAD00',
  image:'assets/Icons/Total Employees.svg'
  },
]
  constructor() { }

  ngOnInit() {
  }

}

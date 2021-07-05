import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  userExisted: boolean = false
  salarySlip: string = ''
  constructor(private authservice: AuthonticationService) {
    this.userExisted = this.authservice.isAuthonticated()
  }

  ngOnInit(): void { }
  getSalarySlip() {
    // if (this.userExisted) {
    if (this.authservice.isAuthonticated()) {
      this.salarySlip = "salary slip"
      return "salary slip"
    }
    this.salarySlip = "not authorize"
    return "not authorize"
  }

}

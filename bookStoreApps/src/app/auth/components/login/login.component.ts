import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  first_name:string='';
  constructor(private queryparams: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.queryparams?.queryParams?.subscribe((param)=>{
     this.first_name=param['name'];
    })
  }

  SignIn()
  {debugger;
    this.route.navigate(['/public/book-details',100,'author',999])
  }

}

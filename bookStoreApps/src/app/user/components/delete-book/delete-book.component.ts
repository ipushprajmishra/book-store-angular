import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent implements OnInit {
constructor(private routevalues:ActivatedRoute){}

  ngOnInit(): void {
   this.routevalues.parent?.params.subscribe(
    (param)=>{
      console.log('this is user id ' +  param['user_id'])
    }
   );
  }

}

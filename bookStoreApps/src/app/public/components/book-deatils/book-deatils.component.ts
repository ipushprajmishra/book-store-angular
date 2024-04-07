import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-deatils',
  templateUrl: './book-deatils.component.html',
  styleUrl: './book-deatils.component.css'
})
export class BookDeatilsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((param) => {
      this.route_id=param['id'];
      this.route_authorId=param['authorId'];
    });
  }

  public route_id: number = 0;
  public route_authorId: number = 0;

}

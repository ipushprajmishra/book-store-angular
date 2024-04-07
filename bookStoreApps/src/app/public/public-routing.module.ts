import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDeatilsComponent } from './components/book-deatils/book-deatils.component';



const routes: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id/author/:authorId', component: BookDeatilsComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

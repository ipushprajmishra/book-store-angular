import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDeatilsComponent } from './components/book-deatils/book-deatils.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDeatilsComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})



export class PublicModule { }

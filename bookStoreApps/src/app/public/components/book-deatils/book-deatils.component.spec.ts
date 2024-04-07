import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeatilsComponent } from './book-deatils.component';

describe('BookDeatilsComponent', () => {
  let component: BookDeatilsComponent;
  let fixture: ComponentFixture<BookDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

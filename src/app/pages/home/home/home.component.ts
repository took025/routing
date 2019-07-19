import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from 'src/app/core/service/books/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  load = true;
  subscription:Subscription;
  data = {};
  constructor(private booksService:BooksService) { }

  ngOnInit() {
   this.subscription = this.booksService.getBooks().subscribe((res:any) => {
      this.data = {...res};
      this.load = false;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

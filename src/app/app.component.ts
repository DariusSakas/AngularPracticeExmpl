import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic title';
  number = 5;
  arr = [1, 2, 3, 10];
  obj = { a: 1, b: 3 };
}

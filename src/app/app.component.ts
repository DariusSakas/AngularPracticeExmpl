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
  img = 'https://d29fhpw069ctt2.cloudfront.net/icon/image/38737/preview.svg';

  constructor() {
    setTimeout(() => {
      console.log('Time out is over');
      this.img =
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png';
    }, 5000);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  onInstagram(){
    const url = 'https://www.instagram.com/southernstrengthfl/';
    window.open(url, '_blank');
  }
}

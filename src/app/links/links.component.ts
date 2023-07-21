import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  links = [
    { text: 'Home', href: '/home' },
    { text: 'Product', href: '/product' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Conduct', href: '/conduct' }
  ];

}

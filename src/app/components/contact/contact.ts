import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Nav,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}

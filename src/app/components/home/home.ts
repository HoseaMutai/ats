import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Nav } from '../nav/nav';
import { Hero } from '../hero/hero';
import { Featured } from '../featured/featured';
import { Tech } from '../tech/tech';
import { TestimonialC } from '../testimonial/testimonial';


@Component({
  selector: 'app-home',
  imports: [Nav,Hero,Featured,Tech,TestimonialC,Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

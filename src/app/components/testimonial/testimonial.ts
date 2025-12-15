import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Testimonial {
name: string;
role: string;
message: string;
rating: number;
avatar: string;
}
@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class TestimonialC {
testimonials: Testimonial[] = [
{
name: 'Jane Mwangi',
role: 'Business Owner',
message:
'The team delivered a clean, modern website that perfectly represents our brand. Highly recommended!',
rating: 5,
avatar: '/images/service1.png',
},
{
name: 'Kevin Otieno',
role: 'Startup Founder',
message:
'Professional, reliable, and very skilled. Communication throughout the project was excellent.',
rating: 4,
avatar: '/images/service2.png',
},
{
name: 'Sarah Njeri',
role: 'Marketing Manager',
message:
'Our conversions improved significantly after the redesign. Great attention to detail.',
rating: 5,
avatar: '/images/service3.png',
},
];
}

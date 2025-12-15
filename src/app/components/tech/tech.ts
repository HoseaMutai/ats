import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string; // Placeholder for the actual image path
}
@Component({
  selector: 'app-tech',
  imports: [CommonModule],
  templateUrl: './tech.html',
  styleUrl: './tech.scss',
})

export class Tech {
public services: ServiceItem[] = [
   
    {
      title: 'Software Development',
      description: 'websites, Android Apps, ERP systems best to manage your business easly',
      imageUrl: '/images/service1.png' // Placeholder
    },
    {
      title: 'Graphic Design',
      description: 'High quality designs from Posters, Flyers, Calendars, Logos etc. that best sell your business.',
      imageUrl: '/images/service2.png' // Placeholder
    },
     {
      title: 'Related Services',
      description: 'ATS is not limited to the above services. Any other tech related service sorrounding the field of technology',
      imageUrl: '/images/service3.png' // Placeholder
    }
  ];
}


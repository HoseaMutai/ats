import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Solution {
title: string;
description: string;
icon: string;
}
@Component({
  selector: 'app-software',
  imports: [CommonModule],
  templateUrl: './software.html',
  styleUrl: './software.scss',
})
export class Software {
solutions: Solution[] = [
{
title: 'Web Application Development',
description:
'Custom, scalable web applications built with modern technologies to support business growth and efficiency.',
icon: 'fa-solid fa-globe',
},
{
title: 'E-Commerce Solutions',
description:
'Secure online stores with payment integration, inventory management, and user-friendly shopping experiences.',
icon: 'fa-solid fa-cart-shopping',
},
{
title: 'Business Management Systems',
description:
'Tailored systems for managing operations, data, and workflows to improve productivity and decision-making.',
icon: 'fa-solid fa-diagram-project',
},
{
title: 'API & System Integration',
description:
'Seamless integration of third-party services and APIs to connect your software ecosystem.',
icon: 'fa-solid fa-plug',
},
];
}

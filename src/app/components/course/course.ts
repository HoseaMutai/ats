import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Course {
title: string;
description: string;
icon: string;
}
@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.scss',
})
export class CourseC {
courses: Course[] = [
{
title: 'Data Science',
description:
'Learn how to analyze data, build predictive models, and make data-driven decisions using real-world datasets.',
icon: 'fa-solid fa-chart-line',
},
{
title: 'Advance Computer Packages',
description:
'Master essential computer skills including MS Word, Excel, PowerPoint, internet use, and digital productivity tools.',
icon: 'fa-solid fa-desktop',
},
{
title: 'Python, Java etc.',
description:
'Understand programming fundamentals and build applications using modern languages and logical problem-solving skills.',
icon: 'fa-solid fa-code',
},
{
title: 'Graphic Design',
description:
'Create stunning visuals, logos, posters, and social media designs using professional design principles and tools.',
icon: 'fa-solid fa-palette',
},
{
title:'Web Development',
description: 'Design and develop responsive websites using modern technologies for fast, secure, and user-friendly web experiences.',
icon:'fa-solid fa-globe',

},
{
title:'Advance Excel',
description: 'Analyze data efficiently using formulas, pivot tables, charts, dashboards, and automation techniques in Excel',
icon:'fa-solid fa-table',

},
{
title:'Digital Marketing',
description: 'Learn how to grow brands online through social media marketing, SEO, content creation, and online advertising',
icon:'fa-solid fa-bullhorn',

},
];
}

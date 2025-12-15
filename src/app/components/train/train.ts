import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { CourseC } from '../course/course';
import { Common } from '../common/common';

@Component({
  selector: 'app-train',
  imports: [Nav,CourseC,Footer,Common],
  templateUrl: './train.html',
  styleUrl: './train.scss',
})
export class Train {

}

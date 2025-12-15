import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { Software } from '../software/software';
import { Common } from '../common/common';

@Component({
  selector: 'app-dev',
  imports: [Nav,Software, Footer,Common],
  templateUrl: './dev.html',
  styleUrl: './dev.scss',
})
export class Dev {

}

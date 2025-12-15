import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [RouterLink,RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

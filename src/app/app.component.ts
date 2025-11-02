import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from "./top-nav/top-nav.component";
import { MatIcon } from "@angular/material/icon";
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule,
    CommonModule,
    TopNavComponent,
    MatIcon,
    SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ac-service';

  images = [
    './assets/cool.png',
    './assets/cool2.png',
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };
}

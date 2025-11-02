import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from "./top-nav/top-nav.component";
import { MatIcon } from "@angular/material/icon";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule,
    CommonModule,
    TopNavComponent,
    MatIcon,
    SlickCarouselModule,
    MatGridListModule,
    MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JerichoSigua';

  images = [
    './assets/cool.png',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  openLink(url: string) {
  window.open(url, '_blank');
}
}

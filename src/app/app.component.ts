import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from "./top-nav/top-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ac-service';
  showFiller = false;
}

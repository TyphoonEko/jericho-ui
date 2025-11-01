import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
@Input() drawer!: MatDrawer;

toggleSideNav() {
  this.drawer.toggle();
}
}

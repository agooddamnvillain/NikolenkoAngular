import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';       // для router-outlet
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'shop-root',          // цей селектор має збігатися з index.html
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule               // без цього router-outlet не працює
  ]
})
export class AppComponent {}
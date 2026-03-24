import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListComponent } from './features/products/list/list.component'; // 👈 ДОДАЙ
import { ConfigurableHighlightDirective } from './shared/directives/configurable-highlight.directive';

@Component({
  selector: 'shop-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    ListComponent,   // 👈 ОБОВ’ЯЗКОВО
    RouterModule,
    ConfigurableHighlightDirective
  ]
})
export class AppComponent {}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedMenuUnroutedComponent } from "./shared/shared.menu.unrouted/shared.menu.unrouted/shared.menu.unrouted.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedMenuUnroutedComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendIniciarSesion';
}

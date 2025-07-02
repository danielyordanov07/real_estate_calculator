import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTabComponent } from "./components/main-tab/main-tab.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, MainTabComponent]
})
export class AppComponent {
  title = 'Real Estate Calculator';
}
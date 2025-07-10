import { Component } from '@angular/core';
import { LanguageChangerComponent } from "../language-changer/language-changer.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageChangerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

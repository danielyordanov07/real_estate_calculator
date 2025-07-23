import { Component } from '@angular/core';
import { LanguageChangerComponent } from "../language-changer/language-changer.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: 
  [
    LanguageChangerComponent,
    TranslatePipe
  ]
})
export class HeaderComponent {

}

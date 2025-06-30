import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-tab-switcher',
  standalone: true,
  imports: [MatTabsModule, BrowserAnimationsModule ],
  templateUrl: './tab-switcher.component.html',
  styleUrl: './tab-switcher.component.css'
})
export class TabSwitcherComponent {

}

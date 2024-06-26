import { Component } from '@angular/core';

import { MatModule } from './../../appModules/mat.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-buttons',
  standalone: true,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  imports: [CommonModule, MatModule],
})
export class ButtonsComponent {

}

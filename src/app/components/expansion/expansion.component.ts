import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';

@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './expansion.component.html',
  styleUrl: './expansion.component.scss'
})
export class ExpansionComponent {
  panelOpenState = false;
}

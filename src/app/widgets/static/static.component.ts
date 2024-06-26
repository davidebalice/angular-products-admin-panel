import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';

@Component({
  selector: 'app-static',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './static.component.html',
  styleUrl: './static.component.scss'
})
export class StaticComponent {

}

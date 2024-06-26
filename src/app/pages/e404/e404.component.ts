import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';

@Component({
  selector: 'app-e404',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './e404.component.html',
  styleUrl: './e404.component.scss'
})
export class E404Component {

}

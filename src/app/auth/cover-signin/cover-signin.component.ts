import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cover-signin',
  standalone: true,
  imports: [CommonModule, MatModule, RouterModule],
  templateUrl: './cover-signin.component.html',
  styleUrl: './cover-signin.component.scss'
})
export class CoverSigninComponent {

  hide = true;

  

}

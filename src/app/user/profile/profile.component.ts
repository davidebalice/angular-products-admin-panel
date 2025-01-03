import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { MatModule } from 'src/app/appModules/mat.module';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user: User;
  user$: Observable<User> | undefined;
  userForm: FormGroup;

  private subscription: Subscription;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  private initForm(user: User) {
    this.userForm = this.formBuilder.group({
      name: [user.name, Validators.required],
      surname: [user.surname, Validators.required],
      phoneNumber: [user.phoneNumber],
    });
  }

  ngOnInit(): void {
    this.user$ = this.userService.getMe();
    this.subscription = this.user$.subscribe((user: User) => {
      this.user = user;
      this.initForm(this.user);
    });
  }

  getFullImageUrl(imageUrl: string): string {
    return `${AppConfig.apiUrl}/users/image/${imageUrl}`;
  }

  onEditUser() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onBackUsers() {
    this.router.navigate(['/users']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

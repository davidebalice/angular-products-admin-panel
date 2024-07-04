import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../sidebar/sidebar.service';
import { AppIcon } from './app-icon';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public sidebarservice: SidebarService,
    private authService: AuthService,
    private router: Router
  ) {}

  theme_name = 'dark_mode';

 
  darkMode() {
    if (this.theme_name == 'light_mode') {
      document
        .querySelector('html')
        .classList.replace('dark_mode', 'light_mode');
      this.theme_name = 'dark_mode';
    } else if (this.theme_name == 'dark_mode') {
      document
        .querySelector('html')
        .classList.replace('light_mode', 'dark_mode');
      this.theme_name = 'light_mode';
    }
    return this.theme_name;
  }

  getSideBarSate() {
    return this.sidebarservice.getSidebarState();
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }


  onLogout() {
    this.authService.logout();
  }

  appIcon: AppIcon[] = [
    { src: 'assets/images/app/apple.png', name: 'Apple' },
    { src: 'assets/images/app/behance.png', name: 'Behance' },
    { src: 'assets/images/app/slack.png', name: 'Slack' },
    { src: 'assets/images/app/bootstrap.png', name: 'Bootstrap' },
    { src: 'assets/images/app/google-drive.png', name: 'Drive' },
    { src: 'assets/images/app/outlook.png', name: 'Outlook' },
    { src: 'assets/images/app/github.png', name: 'GitHub' },
    { src: 'assets/images/app/stack-overflow.png', name: 'Overflow' },
    { src: 'assets/images/app/figma.png', name: 'Figma' },
    { src: 'assets/images/app/twitter.png', name: 'Twitter' },
    { src: 'assets/images/app/google-calendar.png', name: 'Calendar' },
    { src: 'assets/images/app/spotify.png', name: 'Spotify' },
    { src: 'assets/images/app/google-photos.png', name: 'Photos' },
    { src: 'assets/images/app/pinterest.png', name: 'Pinterest' },
    { src: 'assets/images/app/linkedin.png', name: 'linkedin' },
    { src: 'assets/images/app/dribble.png', name: 'Dribbble' },
    { src: 'assets/images/app/youtube.png', name: 'YouTube' },
    { src: 'assets/images/app/google.png', name: 'News' },
    { src: 'assets/images/app/envato.png', name: 'Envato' },
    { src: 'assets/images/app/safari.png', name: 'Safari' },
  ];

  ngOnInit() {}
}

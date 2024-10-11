import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="wrapper">
      <nav class="navbar">
        <div class="title">
          <a routerLink="/">PERSONAL PORTFOLIO SITE</a>
        </div>

        <ul class="menu-right">
          <li><a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }">HOME</a></li>
          <li><a routerLink="/resume" routerLinkActive="active">RESUME</a></li>
          <li><a routerLink="/about" routerLinkActive="active">ABOUT</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">PROJECTS</a></li>
        </ul>
      </nav>

      <main class="main-content">
        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <p class="copyright">Copyright &copy; 2024 Diana Ruiz Garcia</p>
      </footer>
    </div>
  `,
  styles: ``
})
export class AppComponent {}

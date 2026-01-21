import { Component, OnInit, signal, inject, PLATFORM_ID, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '(document:mousemove)': 'onMouseMove($event)',
  },
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);
  protected readonly title = signal('triNodesLanding');
  protected readonly mouseX = signal(0);
  protected readonly mouseY = signal(0);
  protected readonly isDarkMode = signal(false);

  constructor() {
    // Load dark mode preference from localStorage
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
    }

    // Apply dark mode class when signal changes
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.isDarkMode()) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        offset: 50,
      });
    }
  }

  protected toggleDarkMode(): void {
    this.isDarkMode.update((value) => !value);
  }

  onMouseMove(event: MouseEvent): void {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}

import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
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

  onMouseMove(event: MouseEvent): void {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }
}

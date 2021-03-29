import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n: number = 0;
  m: number = 0;
  ans: number = 0;

  add(): void {
    this.ans = this.n + this.m;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  savedResults: number[] = [];

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }

  save(): void {
    this.savedResults.push(this.counter);
  }
}

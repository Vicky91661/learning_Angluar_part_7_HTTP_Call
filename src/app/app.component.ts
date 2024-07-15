import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from "./component/joke/joke.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sevenAngularApp';
}

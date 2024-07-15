import { Component } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  joke : any =''
  constructor(public jokeService:ApiCallService){}

  ngOnInit(){
    this.jokeService.getTodayjoke().subscribe((data:any)=>this.joke = data.value)
  }
}

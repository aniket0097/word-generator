import { Component } from '@angular/core';
import arrayWords from "../util/words";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-gen';
  words = ' ';
  limit = 10;

  slideHandle(newLimit: number){
   
    this.limit = newLimit;
}

generate (){
  this.words = arrayWords.slice(0,this.limit).join(' ');
}



}
 
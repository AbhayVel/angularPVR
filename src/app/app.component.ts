import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: string = "Hi All..";
    color: string = "red";
    message2: string="";
    show() {
        this.message2 = this.message2 + "a";
    }

}

import { Component } from '@angular/core';
import { process } from 'electron';

// import * as path from 'path';
@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Electron starter kit is ready!';

  constructor () {}

  doNotify () {
    console.log('notify');
    const message = {
      title: 'Content-image Notification',
      body : 'Short message'
    };
    new Notification(message.title, message);
  }
}

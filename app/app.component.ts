import { Component } from '@angular/core';
import { Friends } from "./app.friends";

@Component({
  selector: 'hello',
  template: `<h1>Hello World {{componentName}}</h1>
 	          <my-friends></my-friends>
  `,
  directives:[Friends],
  providers: [],
  styles: [`
    h1 {
      color:#545454;
      background:#02A8F4;
      padding:15px;
      box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
   }
  `] 
})
export class AppComponent { 
  componentName: 'AppComponent';
}



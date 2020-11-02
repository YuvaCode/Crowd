import { Component } from '@angular/core';
import { SubscribeService } from '../app/services/subscribe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  message = '';
  enabled = false;

  constructor(private subscribeService: SubscribeService){}

  public Subscribe(email : string)
  {
    this.subscribeService.Subscribe(email);
    this.enabled = true;
  }

}

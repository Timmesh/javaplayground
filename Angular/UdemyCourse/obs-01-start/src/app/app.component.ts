import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  activatedSub: Subscription;
   

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.activatedSub = this.userService.activateEmitter.subscribe(data=>{
      this.userActivated = data;
    })
  }
  
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}

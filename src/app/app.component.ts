import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-git-deploy';

  constructor(private appRef: ApplicationRef) {}
  
  ngOnInit(): void {
    console.log(this.appRef);
  }

}

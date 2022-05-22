import { Component } from '@angular/core';
import { AddRoomService } from './add-room.service';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public addroomservice: AddRoomService,public dataservice: DataService) {

// this.dataservice.init();
//     this.addroomservice.init();

  }
}

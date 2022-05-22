import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRoomService } from 'src/app/add-room.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  roomList: any;

  constructor(public modalController: ModalController,public addroomservice: AddRoomService) {

    this.addroomservice.startDB().then(()=> {
      this.getAllroom();

      });
   }

  ngOnInit() {}


  deleteItem(key){

    console.log(key);

    const deleteDb = this.addroomservice.deleteOne('room', key);
    console.log('delete data ', deleteDb);
    deleteDb.then((data)=> {
      this.roomList = data;
    });

  }

  getAllroom(){
    const tempData  = this.addroomservice.getRoomData('room');
    tempData.then((data)=> {
     console.log(data);
     this.roomList = data;
    });


   }


  dismiss(){

    this.modalController.dismiss();

  }

}

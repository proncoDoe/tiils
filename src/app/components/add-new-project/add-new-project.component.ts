import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { AddRoomService } from 'src/app/add-room.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.scss'],
})
export class AddNewProjectComponent implements OnInit {

roomList: any;

  addNewProject = {};
    projectName: any;
    addressName: any;
    clientName: any;
    pDate: any;


  constructor(public modalController: ModalController,public dataservice: DataService,public addroomservice: AddRoomService) {

    this.addroomservice.startDB().then(()=> {
      this.getAllroom();

      });

  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
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

// add new project
 async add(){

  this.addNewProject = ({id:Date.now() ,pName:this.projectName,adName:this.addressName,cName:this.clientName,prjDate:this.pDate});
  console.log(this.addNewProject);
    const uid = this.clientName + this.pDate;
    if(uid){
      await this.dataservice.setDb('project',this.addNewProject);
      this.projectName = null;
      this.addressName = null;
      this.clientName = null;
      this.pDate = null;

    }else{

      console.log('can\'t save empty Project');
    }

}






}

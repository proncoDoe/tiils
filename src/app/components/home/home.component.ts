/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  projectList: any;

today: number = Date.now();

  searchForm = {

    search: ''

  };

  constructor(public modalController: ModalController, public dataservice: DataService) {

    this.dataservice.startDB().then(()=> {
    this.getAllProject();

    });

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  ngOnInit() {


  }

  deleteItem(key){

    console.log(key);

    const deleteDb = this.dataservice.deleteOne('project', key);
    console.log('delete data ', deleteDb);
    deleteDb.then((data)=> {
      this.projectList = data;
    });

  }


  getAllProject(){
   const tempData  = this.dataservice.getAllData('project');
   tempData.then((data)=> {
    console.log(data);
    this.projectList = data;
   });


  }



  onSubmit(form: NgForm){

    if(form.valid){

      console.log('form', this.searchForm);

    }


  }

}

import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AddRoomService } from 'src/app/add-room.service';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {

  categories =[];

  addRoom = {};
    roomName: any;
     roomLenght: any;
     roomWidth: any;
      recommended: any;
      // size: any;
      taskCategory: any;

      result: number;

      dvd: number = 3;


  constructor(public addroomservice: AddRoomService) {}

  ngOnInit() {

    this.categories.push('40By40');
    this.categories.push('60By60');
    this.categories.push('25By40');
    this.categories.push('30By60');
  }


  selectedCategory(index): void{
    this.taskCategory = this.categories[index];

  }

  async adRoom(){

    // eslint-disable-next-line radix
    this.result = Math.floor(parseInt(this.roomLenght) * parseInt(this.roomWidth) / this.dvd );

    this.addRoom = ({id:Date.now() ,rName:this.roomName,rLength:this.roomLenght,rWidth:this.roomWidth,
      tRecomended:this.recommended,res:this.result,itemCategory:this.taskCategory});
    console.log(this.addRoom);

      const uid = this.roomName + this.roomLenght;
      if(uid){
        await this.addroomservice.setDb('room',this.addRoom);
        this.roomName = null;
        this.roomLenght = null;
        this.roomWidth = null;
        this.recommended = null;
        this.taskCategory = null;
   

      }else{

        console.log('can\'t save empty Project');
      }

  }


}

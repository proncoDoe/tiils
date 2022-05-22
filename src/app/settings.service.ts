import { Injectable } from '@angular/core';

import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private storageReady = new BehaviorSubject(false);
  private _storage: Storage | null = null;


  constructor(private storage: Storage) {

    this.init();
  }
  async setDb(name, value){
    const data = {id: value.id, value};
    const allData =  await this.getRoomData(name);
    if(allData){
      allData[data.id] = data;
      console.log('All Data ', allData);
      return this.storage.set(`${name}`,  allData);
    }else{
    const temData = {};
    temData[data.id] = data;
   return this.storage.set(`${name}`,  temData);
    }

 }

 async  updatedata(name, value){
  return this.storage.set(`${name}`, value);
}



 async getRoomData(name){
  return  await  this.storage.get(`${name}`);

}

async getSingleData(name,id){
  const data = await this.storage.get(`${name}`);
  console.log('SSSSS ', data);
if(data[id]){
  return data;
}else{
  return null;
}
}
  async startDB(){
    const store = new Storage();
await store.create();

}

  async init() {
     await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
     this._storage = storage;
     this.storageReady.next(true);
 }



}

/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageReady = new BehaviorSubject(false);
 private _storage: Storage | null = null;
  constructor(private storage: Storage) {

    this.init();
   }

    async setDb(name, value){
      const data = {id: value.id, value};
      const allData =  await this.getAllData(name);
      if(allData){
        allData[data.id] = data;
        console.log('All Data ', allData);
        return this.storage.set(`${name}`,  allData);
      }else{
      let temData = {};
      temData[data.id] = data;
     return this.storage.set(`${name}`,  temData);
      }

   }

 async  updatedata(name, value){
     return this.storage.set(`${name}`, value);
   }

   async deleteOne(name, key){
    const allData =  await this.getAllData(name);
    delete  allData[key];
    return this.storage.set(`${name}`,  allData);
   }

  //  delete entire database table
   public removeDb(name){
     return this.storage.remove(`${name}`);
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

   async getAllData(name){
     return  await  this.storage.get(`${name}`);

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

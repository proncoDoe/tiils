import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  file: any;
  webview: any;
  domSanitizer: any;



  settings = {};
  companyName: any;
  address: any;
  directorName: any;
  imageUpload: any;
  size40by40: any;
  size60by60: any;
  size25by40: any;
  size30by60: any;
  workManShip: any;

  constructor(public sanitizer: DomSanitizer, public settingsservice: SettingsService) {}

  ngOnInit() {}



  public getImgContent(imageName: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.webview.convertFileSrc(this.file.dataDirectory + imageName));
   }

  loadImageFromDevice(event) {

    this.imageUpload = event.target.files[0];

    console.log('form', event.target.files[0]);

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = () => {

      // get the blob of the image:
      const blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      // create blobURL, such that we could use it in an image element:
      const blobURL: string = URL.createObjectURL(blob);

    };

    reader.onerror = (error) => {

      //handle errors

    };

  };


  async adSetting(){

    this.settings = ({id:Date.now() ,cpName:this.companyName,cpAddress:this.address,dName:this.directorName,
      imUpload:this.imageUpload,size40by40:this.size40by40,size60by60:this.size60by60,
      size25by40:this.size25by40,size30by60:this.size30by60,wManShip:this.workManShip});
    console.log(this.settings);

      const uid = this.companyName + this.size40by40;
      if(uid){
        await this.settingsservice.setDb('settingTable',this.settings);
        this.companyName = null;
        this.address = null;
        this.directorName = null;
        this.imageUpload = null;
        this.size40by40 = null;
        this.size60by60 = null;
        this.size25by40 = null;
        this.size30by60 = null;
        this.workManShip = null;

      }else{

        console.log('can\'t save empty Setting Data');
      }

  }






}

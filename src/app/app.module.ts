

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { HomeComponent } from './components/home/home.component';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InvoiceComponent } from './components/invoice/invoice.component';




@NgModule({
  declarations: [AppComponent,HomeComponent,AddNewProjectComponent,
    AddRoomComponent, SettingsComponent, InvoiceComponent, ModalComponent,FooterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,IonicStorageModule.forRoot({

      driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]


  })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

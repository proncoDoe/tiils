import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'add',
    component: AddNewProjectComponent
  },

  {
    path: 'add-room',
    component: AddRoomComponent
  },

  {
    path: 'settings',
    component: SettingsComponent
  },

    {
    path: 'invoice',
    component:  InvoiceComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

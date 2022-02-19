import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagementMainPageComponent } from './modules/partners-management/pages/management-main-page/management-main-page.component';
import { ListMainPageComponent } from './modules/partners-list/pages/partners-main-page/list-main-page.component';

const routes: Routes = [
  { path: 'partners-list', component: ListMainPageComponent },
  { path: 'partners-management', component: ManagementMainPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMainPageComponent } from './pages/partners-main-page/list-main-page.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CreatePartnerFormComponent } from './comp/create-partner-form/create-partner-form.component';
import { ClientSidebarDetailsComponent } from './comp/client-sidebar-details/client-sidebar-details.component';

@NgModule({
  declarations: [ListMainPageComponent, CreatePartnerFormComponent, ClientSidebarDetailsComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    SidebarModule,
  ],

  providers: [DialogService, FormBuilder],
})
export class PartnersListModule {}

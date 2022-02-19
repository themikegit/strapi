import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedBehaviorService } from 'src/app/shared/services/shared-behavior.service';
import { CreatePartnerFormComponent } from '../../comp/create-partner-form/create-partner-form.component';
import { PartnersApiService } from '../../services/partners-api.service';
import { MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import { ClientData, StrapiRes } from 'src/app/shared/model/strapiApi.model';

@Component({
  selector: 'app-partners-main-page',
  templateUrl: './list-main-page.component.html',
  styleUrls: ['./list-main-page.component.scss'],
  providers: [MessageService],
})
export class ListMainPageComponent implements OnInit {
  constructor(
    private partnersService: PartnersApiService,
    private dialogService: DialogService,
    private sharedBehavior: SharedBehaviorService,
    private messageService: MessageService
  ) {}
  clients: ClientData[];
  exportColumns: any[];
  cols: any[];
  exeReady: any;
  sidebarStatus: boolean;
  clientDetails: ClientData;

  onRowSelect(row) {
    this.sidebarStatus = true;
    this.clientDetails = row;
  }

  populateClientTable() {
    this.partnersService.getAllPartners().subscribe((res: StrapiRes) => {
      this.clients = res.data;
      console.log(res.data);
      console.log(res);
      this.exeReady = this.clients.map((client) => {
        return {
          id: client.id,
          firstName: client.attributes.firstName,
          lastName: client.attributes.lastName,
          role: client.attributes.role,
        };
      });
    });
  }

  addNewPartner() {
    const dialogRef = this.dialogService.open(CreatePartnerFormComponent, {
      header: 'Create Parnter',
      width: '500px',
      height: '500px',
    });
    dialogRef.onClose.subscribe((res) => {
      this.populateClientTable();
      this.messageService.add({
        severity: 'success',
        summary: res.data.attributes.firstName + ' is created',
        detail: '',
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.exeReady);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  ngOnInit(): void {
    this.populateClientTable();
    this.cols = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'role', header: 'Role' },
      { field: 'edit', header: '' },
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }
}

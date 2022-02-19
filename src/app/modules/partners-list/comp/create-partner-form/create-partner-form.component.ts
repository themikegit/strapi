import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { StrapiRes } from 'src/app/shared/model/strapiApi.model';
import { SharedBehaviorService } from 'src/app/shared/services/shared-behavior.service';
import { PartnersApiService } from '../../services/partners-api.service';

@Component({
  selector: 'app-create-partner-form',
  templateUrl: './create-partner-form.component.html',
  styleUrls: ['./create-partner-form.component.scss'],
})
export class CreatePartnerFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private partnersApi: PartnersApiService,
    public dialogRef: DynamicDialogRef
  ) {}
  createPartnersForm!: FormGroup;
  partnersFields = [
    { control: 'firstName', label: 'First Name' },
    { control: 'lastName', label: 'Last Name' },
    { control: 'role', label: 'Role' },
  ];

  onSubmit() {
    this.partnersApi
      .createPartner({
        data: this.createPartnersForm.value,
      })
      .subscribe((res: StrapiRes) => {
        console.log(res);

        this.dialogRef.close(res);
      });
  }

  ngOnInit(): void {
    this.createPartnersForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      role: [''],
    });
  }
}

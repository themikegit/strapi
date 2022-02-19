import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-sidebar-details',
  templateUrl: './client-sidebar-details.component.html',
  styleUrls: ['./client-sidebar-details.component.scss'],
})
export class ClientSidebarDetailsComponent implements OnInit {
  @Input() clientDetails;
  constructor() {}

  ngOnInit(): void {}
}

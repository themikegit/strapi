import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSidebarDetailsComponent } from './client-sidebar-details.component';

describe('ClientSidebarDetailsComponent', () => {
  let component: ClientSidebarDetailsComponent;
  let fixture: ComponentFixture<ClientSidebarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSidebarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSidebarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

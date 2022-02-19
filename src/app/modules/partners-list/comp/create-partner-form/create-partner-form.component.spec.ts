import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartnerFormComponent } from './create-partner-form.component';

describe('CreatePartnerFormComponent', () => {
  let component: CreatePartnerFormComponent;
  let fixture: ComponentFixture<CreatePartnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePartnerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePartnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersMainPageComponent } from './partners-main-page.component';

describe('PartnersMainPageComponent', () => {
  let component: PartnersMainPageComponent;
  let fixture: ComponentFixture<PartnersMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePersonsComponent } from './table-persons.component';

describe('TablePersonsComponent', () => {
  let component: TablePersonsComponent;
  let fixture: ComponentFixture<TablePersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

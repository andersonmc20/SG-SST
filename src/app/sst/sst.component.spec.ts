import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstComponent } from './sst.component';

describe('SstComponent', () => {
  let component: SstComponent;
  let fixture: ComponentFixture<SstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

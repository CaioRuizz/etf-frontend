import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSharesDialogComponent } from './all-shares-dialog.component';

describe('AllSharesDialogComponent', () => {
  let component: AllSharesDialogComponent;
  let fixture: ComponentFixture<AllSharesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSharesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllSharesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

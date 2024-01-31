import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSocialMediaDialogComponent } from './share-social-media-dialog.component';

describe('ShareSocialMediaDialogComponent', () => {
  let component: ShareSocialMediaDialogComponent;
  let fixture: ComponentFixture<ShareSocialMediaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareSocialMediaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareSocialMediaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

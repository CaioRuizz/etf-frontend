import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreposicaoComponent } from './sobreposicao.component';

describe('SobreposicaoComponent', () => {
  let component: SobreposicaoComponent;
  let fixture: ComponentFixture<SobreposicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreposicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

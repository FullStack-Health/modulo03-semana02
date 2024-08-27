import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterPipePageComponent } from './converter-pipe-page.component';

describe('ConverterPipePageComponent', () => {
  let component: ConverterPipePageComponent;
  let fixture: ComponentFixture<ConverterPipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterPipePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConverterPipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

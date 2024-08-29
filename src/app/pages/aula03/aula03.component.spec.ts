import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula03Component } from './aula03.component';

describe('Aula03Component', () => {
  let component: Aula03Component;
  let fixture: ComponentFixture<Aula03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

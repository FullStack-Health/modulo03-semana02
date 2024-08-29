import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula02Component } from './aula02.component';

describe('Aula02Component', () => {
  let component: Aula02Component;
  let fixture: ComponentFixture<Aula02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

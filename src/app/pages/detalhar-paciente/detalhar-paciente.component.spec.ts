import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPacienteComponent } from './detalhar-paciente.component';

describe('DetalharPacienteComponent', () => {
  let component: DetalharPacienteComponent;
  let fixture: ComponentFixture<DetalharPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalharPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

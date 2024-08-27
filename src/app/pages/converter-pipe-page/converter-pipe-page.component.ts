import { Component } from '@angular/core';
import { ConvertMoneyPipe } from '../../pipes/convert-money.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter-pipe-page',
  standalone: true,
  imports: [ ConvertMoneyPipe, FormsModule],
  templateUrl: './converter-pipe-page.component.html',
  styleUrl: './converter-pipe-page.component.css'
})
export class ConverterPipePageComponent {
  moneyValue: number = 0; 
}

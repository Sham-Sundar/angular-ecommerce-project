import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seller-central',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seller-central.component.html',
  styleUrl: './seller-central.component.css'
})
export class SellerCentralComponent {

}

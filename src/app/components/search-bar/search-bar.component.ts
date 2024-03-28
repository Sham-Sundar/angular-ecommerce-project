import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchedValue = new EventEmitter<string>();

  onSearch(data:string) {
    this.searchedValue.emit(data);
  }
}

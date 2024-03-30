import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(private sharedService: SharedService){}

  @Output() searchValueChanged = new EventEmitter<string>();

  onSearch(searchValue:string) {
    this.searchValueChanged.emit(searchValue);
    this.sharedService.sendData(searchValue);
  }

}

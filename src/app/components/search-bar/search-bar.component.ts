import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';

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

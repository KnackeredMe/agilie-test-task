import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public searchText: string = '';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  public search() {
    this.searchEvent.emit(this.searchText);
  }

}

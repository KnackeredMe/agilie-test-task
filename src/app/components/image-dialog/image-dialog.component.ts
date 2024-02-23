import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe, NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe,
    NgClass
  ],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.scss'
})
export class ImageDialogComponent {

  public imageLoading: boolean =  true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

}

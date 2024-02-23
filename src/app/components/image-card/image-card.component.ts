import {Component, Input} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ImageDialogComponent} from "../image-dialog/image-dialog.component";

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgOptimizedImage,
    NgStyle,
    NgClass,
  ],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {

  public imageLoading: boolean =  true;
  @Input() image: any;
  @Input() index: any;

  constructor(public dialog: MatDialog,) {
  }

  openDialog() {
    this.dialog.open(ImageDialogComponent, {
      width: `${this.image.images['original'].width * 1.5}px`,
      height: `${this.image.images['original'].height * 1.5}px`,
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: this.image
    })
  }

}

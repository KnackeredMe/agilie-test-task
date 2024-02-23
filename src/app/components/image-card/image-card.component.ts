import {Component, Input} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {ImageDialogComponent} from "../image-dialog/image-dialog.component";
import {IGif} from "../../models/gif.model";

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgOptimizedImage,
    NgStyle,
    NgClass,
    NgIf,
  ],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {

  public imageLoading: boolean =  true;
  @Input() image: IGif | undefined;
  @Input() index: number | undefined;

  constructor(public dialog: MatDialog,) {
  }

  openDialog() {
    if (this.image) {
      this.dialog.open(ImageDialogComponent, {
        width: `${Number(this.image.images.original.width) * 1.5}px`,
        height: `${Number(this.image.images.original.height) * 1.5}px`,
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
        data: this.image
      })
    }
  }

}

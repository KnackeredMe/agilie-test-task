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
      let width = Number(this.image.images.original.width);
      let height = Number(this.image.images.original.height);
      const aspectRatio = width/height;
      if (window.innerWidth > 769) {
        width *= 1.5;
        height *= 1.5;
      }
      if (window.innerWidth < 577) {
        if (width > window.innerWidth) {
          width = window.innerWidth * 0.75;
          height = width / aspectRatio;
        }
        if (height > window.innerHeight) {
          height = window.innerHeight * 0.75;
          width = height * aspectRatio;
        }
      }
      this.dialog.open(ImageDialogComponent, {
        width: `${width}px`,
        height: `${height}px`,
        maxHeight: `${window.innerHeight - 200}px`,
        maxWidth: `${window.innerWidth - 100}px`,
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
        data: this.image
      })
    }
  }

}

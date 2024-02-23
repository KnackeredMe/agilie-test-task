import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {debounceTime, Observable, Subject, takeUntil} from "rxjs";
import {ImageCardComponent} from "../../components/image-card/image-card.component";
import {SearchComponent} from "../../components/search/search.component";
import {LoaderComponent} from "../../components/loader/loader.component";
import {IResponse} from "../../models/response.model";
import {IGif} from "../../models/gif.model";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CommonModule,
    ImageCardComponent,
    SearchComponent,
    LoaderComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent implements OnInit, OnDestroy {

  public images$: Observable<IResponse>;
  public images: IGif[] = [];
  private query: string = '';
  private offset: number = 0;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public loading: boolean = false;

  @ViewChild('imagesContainer', { static: false }) imagesContainer: ElementRef | undefined;
  constructor(private imageService: ImageService) {
    this.images$ = this.imageService.getTrending(this.offset);
  }

  ngOnInit() {
    this.getImages();
  }

  public getImages() {
    this.loading = true;
    this.images$.pipe(debounceTime(300),
      takeUntil(this.destroy$))
      .subscribe({
        next: (res: IResponse) => {
          this.images = this.images.concat(res.data);
          this.loading = false;
        }
      })
  }

  public search(query: string) {
    this.images = [];
    this.offset = 0;
    this.query = query;
    this.images$ = this.query ? this.imageService.getSearch(this.query, this.offset) : this.imageService.getTrending(this.offset)
    this.getImages();
  }

  @HostListener('window: scroll', ['$event']) infiniteScroll() {
    if (!this.imagesContainer) return;
    if ((window.innerHeight + window.scrollY) >= this.imagesContainer.nativeElement.offsetHeight + this.imagesContainer.nativeElement.offsetTop) {
      if (!this.loading) {
        this.offset += 24;
        this.images$ = this.query ? this.imageService.getSearch(this.query, this.offset) : this.imageService.getTrending(this.offset)
        this.getImages();
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

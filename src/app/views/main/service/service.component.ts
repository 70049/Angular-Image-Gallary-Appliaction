import { Component, Input, OnInit } from '@angular/core';
interface crouselImages {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() images: crouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSide = true;
  @Input() sideInterval = 3000;

  public selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.autoSide) {
      this.autoSideImages();
    }
  }

  public autoSideImages = (): void => {
    setInterval(() => {
      this.onNextClick();
    }, this.sideInterval);
  }

  public selectImage(index: number): void {
    this.selectedIndex = index;
  }

  public onPrevClick = (): void => {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  public onNextClick = (): void => {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  // public image = [
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     imageAlt: 'image1'
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     imageAlt: 'image2'
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     imageAlt: 'image3'
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     imageAlt: 'image4'
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
  //     imageAlt: 'image3'
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     imageAlt: 'image3'
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/46235/emperor-penguins-antarctic-life-animal-46235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     imageAlt: 'image3'
  //   },
  // ]


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public images = [
    {
      imageSrc: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'image1'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'image2'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'image3'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'image4'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      imageAlt: 'image3'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'image3'
    },
    {
      imageSrc: 'https://images.pexels.com/photos/46235/emperor-penguins-antarctic-life-animal-46235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'image3'
    },
  ]

}

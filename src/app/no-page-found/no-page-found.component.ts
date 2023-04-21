import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import * as anime from 'animejs';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {

  constructor(
    private _loaction: Location,
  ) { }

  ngOnInit(): void {
  }
  public anime = ({
    targets: '.row svg',
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    translateX: 10,
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: '+=180', delay: 200 },
  })

}

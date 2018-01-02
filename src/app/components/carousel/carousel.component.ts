import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = ['img/slide-1.jpg', 'img/slide-2.jpg', 'img/slide-3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}

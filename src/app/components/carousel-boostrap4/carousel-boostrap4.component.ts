import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel-boostrap-4',
    templateUrl: './carousel-boostrap4.component.html',
    styleUrls: ['./carousel-boostrap4.component.css']
})
export class CarouselBoostrap4Component implements OnInit {

    slides: Slide[] = [
        { slide: 'img/slide-1.jpg', alt: 'First slide' },
        { slide: 'img/slide-2.jpg', alt: 'Second slide' },
        { slide: 'img/slide-3.jpg', alt: 'Third slide' },
    ];

    constructor() { }

    ngOnInit() {
    }

}

export interface Slide {
    slide: string;
    alt: string;
}

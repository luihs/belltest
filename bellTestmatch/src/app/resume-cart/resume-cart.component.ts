import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resume-cart',
  templateUrl: './resume-cart.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./resume-cart.component.css']
})
export class ResumeCartComponent implements OnInit {
  value: number = 200;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
  }

}

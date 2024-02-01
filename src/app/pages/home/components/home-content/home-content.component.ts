import { Component, OnInit } from '@angular/core';

var carrousel = document.querySelector('.carrousel');

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }
  ngOnInit(): void {
    // init carrousel

  }

}

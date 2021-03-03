import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

 
  @ViewChild( CdkVirtualScrollViewport,{static: false} ) viewport: CdkVirtualScrollViewport;
 

  personas = Array(1000).fill(0);
  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  iralfinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  iralinicio() {
    this.viewport.scrollToIndex(0);
  }

  iralamitad() {
    this.viewport.scrollToIndex(this.personas.length/2);
  }
}

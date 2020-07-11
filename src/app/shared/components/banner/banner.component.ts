import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
  ],
  declarations: [ BannerComponent ],
  exports: [ BannerComponent ]
})
export class BannerModule { }

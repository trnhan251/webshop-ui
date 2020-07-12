import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }

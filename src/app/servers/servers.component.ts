import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  // username: string = '';

  toggleDisplay: boolean = true;

  clickArray = [];

  count: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  hhh(){
    this.toggleDisplay = !this.toggleDisplay;
    this.clickArray.push(++this.count);
  }

  /*onclick() {
    this.username = '';
  }*/
}

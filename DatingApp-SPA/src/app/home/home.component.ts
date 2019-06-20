import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registermode = false;
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  registerToggle() {
    this.registermode = !this.registermode;
  }

  cancelRegisterMode(registermode: boolean) {
    this.registermode = registermode;
  }
}

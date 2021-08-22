import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createForm(createService: NgForm) {
    console.log(createService.value);
  }
}

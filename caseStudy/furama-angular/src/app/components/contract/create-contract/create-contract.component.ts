import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createForm(createContract: NgForm) {
    console.log(createContract.value);
  }
}

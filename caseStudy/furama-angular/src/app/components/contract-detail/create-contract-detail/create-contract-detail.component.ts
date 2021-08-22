import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-contract-detail',
  templateUrl: './create-contract-detail.component.html',
  styleUrls: ['./create-contract-detail.component.css']
})
export class CreateContractDetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  createForm(createContractDetail: NgForm) {
    console.log(createContractDetail.value);
  }
}

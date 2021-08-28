import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public todoForm: FormGroup;
  public todoId: number;

  constructor(public todoService: TodoService, public activatedRoute: ActivatedRoute,
              public router: Router, public matSnackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.initfrom();
    this.activatedRoute.params.subscribe(data => {
      this.todoId = data.id;
      console.log(this.todoId);
      this.todoService.getById(this.todoId).subscribe(data2 => {
        this.todoForm.patchValue(data2);
        console.log(data2);
      });
    });
  }

  initfrom() {
    this.todoForm = new FormGroup({
      content: new FormControl(),
      complete: new FormControl(),
    });
  }

  edit() {
    this.todoService.edit(this.todoForm.value, this.todoId).subscribe(data => {
      this.router.navigateByUrl('/list');
      this.matSnackBar.open('Edit success!');
    });
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  public todoName: string;
  public todoId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoName = this.data.name.content;
    this.todoId = this.data.name.id;
    console.log(this.todoName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.todoService.delete(this.todoId).subscribe(dataDialog => {
      this.dialogRef.close();
    });
  }

}

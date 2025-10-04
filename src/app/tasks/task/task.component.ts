import {Component, input, output} from '@angular/core';
import {TaskModel} from "../task.model";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<TaskModel>();
  complete = output<string>();

  // @Output() complete = new EventEmitter();

  onCompleteTask() {
    // this.complete.emit();
    this.complete.emit(this.task().id)
  }
}

import {Component, input, output} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  // @Output() complete = new EventEmitter();

  onCompleteTask() {
    // this.complete.emit();
    this.complete.emit(this.task().id)
  }
}

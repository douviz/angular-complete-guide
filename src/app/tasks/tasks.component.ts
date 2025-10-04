import {Component, input} from '@angular/core';
import {NgIf} from "@angular/common";
import {UserModel} from "../user/user.model";
import {DUMMY_TASKS} from "../dummy-tasks";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskData} from "./task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgIf,
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  selectedUser = input.required<UserModel>();
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  get userTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUser().id);
  }


  onTaskCompleted(id: string) {
    console.log(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.selectedUser().id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });

    this.isAddingTask = false;

  }
}

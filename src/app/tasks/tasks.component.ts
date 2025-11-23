import { Component, input } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserModel } from '../user/user.model';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  selectedUser = input.required<UserModel>();
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get userTasks() {
    return this.taskService.getUserTasks(this.selectedUser().id);
  }

  onTaskCompleted(taskId: string) {
    console.log(taskId);
    this.taskService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.selectedUser().id);
    this.isAddingTask = false;
  }
}

import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output<void>();
  add = output<NewTaskData>();

  inputTitle = signal('');
  inputSummary = signal('');
  inputDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  addTask() {
    this.add.emit(
      {
        title: this.inputTitle(),
        summary: this.inputSummary(),
        dueDate: this.inputDueDate()
      }
  )
  }
}

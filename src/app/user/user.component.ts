import {Component, EventEmitter, Input, Output} from '@angular/core';

import {User} from './user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // With Signals
  // avatar = input.required();
  // name = input.required();
  //
  // imagePath = computed(() => {
  //   `assets/users/${this.avatar()}`
  // })
  // select = output<string>();

  // Without Signals
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

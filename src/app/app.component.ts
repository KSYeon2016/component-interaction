import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="form-inline">
          <div class="form-group" style="margin: 30px 0">
            <label for="name">Name:</label>
            <input #name type="text" id="name" 
              class="form-control" placeholder="이름을 입력하세요">
            <label for="role">Role:</label>
            <select #role id="role" class="form-control">
              <option>Administrator</option>
              <option>Developer</option>
              <option>Designer</option>
            </select>
            <button type="button"
              class="btn btn-default"
              (click)="addUser(name.value, role.value)">Add user
            </button>
          </div>
          <app-user-list [users]="users"></app-user-list>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  // 자식 컴포넌트와 공유할 상태 정보
  users: User[];

  constructor() {
    this.users = [
      new User(1, "Lee", "Administrator"),
      new User(2, "Baek", "Developer"),
      new User(3, "Park", "Designer")
    ];
  }

  // 사용자 추가
  addUser (name: string, role: string) {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  // 새로운 사용자의 id를 취득
  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
  }
}

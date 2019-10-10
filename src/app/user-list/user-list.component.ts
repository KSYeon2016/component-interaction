import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users; let i=index">
          <td>{{ i }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    <div class="panel panel-default">
      <div class="panel-body">
        <p>Admin: {{ cntAdmin }}</p>
        <p>Developer: {{ cntDeveloper }}</p>
        <p>Designer: {{ cntDesigner }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class UserListComponent implements OnInit {
  // 바인딩
  //@Input() users: User[];

  // _users는 내부에서만 사용할 private property
  private _users: User[];

  // 역할별 사용자 카운터
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  @Input()
  set users (users: User[]) {
    if (!users) { return; }

    this.cntAdmin = users.filter(({role}) => role === "Administrator").length;
    this.cntDeveloper = users.filter(({role}) => role === "Developer").length;
    this.cntDesigner = users.filter(({role}) => role === "Designer").length;
    this._users = users;
  }

  get users(): User[] {
    return this._users;
  }

  constructor() { }

  ngOnInit() {
  }

}

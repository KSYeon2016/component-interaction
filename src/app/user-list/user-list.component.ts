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
  `,
  styles: []
})
export class UserListComponent implements OnInit {
  // 바인딩
  @Input()
  users: User[];

  constructor() { }

  ngOnInit() {
  }

}

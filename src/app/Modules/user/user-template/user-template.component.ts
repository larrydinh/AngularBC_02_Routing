import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-template',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <img
          src="https://picsum.photos/1000"
          style="height:100vh"
          alt="hinh nong"
        />
      </div>
      <div class="col-6">
        <router-outlet></router-outlet>
      </div>
    </div>
    </div>
  `,
  styleUrls: ['./user-template.component.scss'],
})
export class UserTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

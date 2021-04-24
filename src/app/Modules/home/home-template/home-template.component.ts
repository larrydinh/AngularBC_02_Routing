import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template',
  template: `
    <p>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </p>
  `,
  styleUrls: ['./home-template.component.scss'],
})
export class HomeTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

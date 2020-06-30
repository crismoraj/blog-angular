import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'Pagina no encontrada';
  }

  ngOnInit(): void {}
}

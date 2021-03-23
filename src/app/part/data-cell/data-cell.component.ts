import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss'],
})
export class DataCellComponent implements OnInit {
  @Input() cellData: string = '';
  @Input() colType: string = '';
  @Input() colOptions: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}
}

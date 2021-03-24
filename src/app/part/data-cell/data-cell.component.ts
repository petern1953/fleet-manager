import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss'],
})
export class DataCellComponent implements OnInit {
  // @Input() row;
  // @Input() col;
  @Input() cellValue: any;

  constructor() {}

  ngOnInit() {}
}

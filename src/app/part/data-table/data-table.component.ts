import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() cols: any[] = [];

  deleteIconClass: string = 'fa fa-trash';

  constructor(private baseService: BaseService = new BaseService()) {
   }

  ngOnInit() {
  }

  onUpdate(event: any): void {
    alert(`Clicked on ${event} button`);
  }

  onDelete(event: any): void {
    alert(`Clicked on ${event} button`);
  }
}

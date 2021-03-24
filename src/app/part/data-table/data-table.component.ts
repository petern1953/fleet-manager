import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() cols: any[] = [];
  // cols: { key: string; text: string; type: string }[] = [
  //   { key: 'id', text: '#', type: 'plain' },
  //   { key: 'name', text: 'Name', type: 'text' },
  //   { key: 'email', text: 'Email', type: 'email' },
  //   { key: 'phone', text: 'Phone', type: 'number' },
  //   { key: 'city', text: 'City', type: 'select' },
  //   { key: 'address', text: 'Street address', type: 'text' },
  // ];
  // driver: any = {
  //   id: 1,
  //   name: 'Philip',
  //   email: 'p@.com',
  //   phone: 362145874,
  //   city: 'Los Angeles',
  //   address: 'my address',
  // };
  cellValue: any;

  // updateIconClass: string = 'fa fa-refresh';
  deleteIconClass: string = 'fa fa-trash-o';

  constructor(private bs: BaseService = new BaseService()) {}

  ngOnInit() {
  }

  onUpdate(event: any): void {
    alert(`Clicked on ${event} button`);
  }

  onDelete(event: any): void {
    alert(`Clicked on ${event} button`);
  }
}

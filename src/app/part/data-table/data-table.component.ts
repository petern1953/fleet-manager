import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  cols: { key: string, text: string }[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Address'},
  ];

  driver: any = {
    id: 1,
    name: 'Philip',
    email: 'p@.com',
    phone: '+362145874',
    city: 'Los Angeles',
    address: 'my address'
  };

  deleteIconClass: string = 'fa fa-trash';

  constructor() {
    setInterval(() => {
      this.deleteIconClass =
        this.deleteIconClass === 'fa fa-trash' ? 'fa fa-trash-o' : 'fa fa-trash';
    }, 1000);
   }

  ngOnInit(): void {
  }

  onUpdate(event: any): void {
    alert(`Clicked on ${event} button`);
  }

  onDelete(event: any): void {
    alert(`Clicked on ${event} button`);
  }
}

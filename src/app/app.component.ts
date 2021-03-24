import { Component, OnInit } from '@angular/core';
import { Driver } from './class/driver';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fleet Manager';
  drivers: Driver[] | any = new Driver();
  cols: any[] = [];

  constructor(
    private baseService: BaseService = new BaseService(),
    private config: ConfigService = new ConfigService()
  ) { }

  ngOnInit() {
    this.drivers = this.baseService.getAll('drivers');
    this.cols = this.config.cols.drivers;
  }
}

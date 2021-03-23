import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fleet Manager';
  driver: any = {};
  cols: any[] = [];

  constructor(
    private baseService: BaseService = new BaseService(),
    private config: ConfigService = new ConfigService()
  ) { }

  ngOnInit() {
    this.driver = this.baseService.getAll('drivers');
    this.cols = this.config.cols.drivers;
  }
}

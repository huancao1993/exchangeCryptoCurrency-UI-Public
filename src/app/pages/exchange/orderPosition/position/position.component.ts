import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { NewsService } from '../../../layout/news.service';

@Component({
  selector: 'ngx-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  news = ["huan123", "huan123", "huan123", "huan123", "huan123", "huan123", "huan123", "huan123", "huan123", "huan123", "huan123", "huan123"];
  constructor() {

  }

  ngOnInit() {
  }

}

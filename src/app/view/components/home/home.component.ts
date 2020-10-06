import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ResultData } from './home';
import { ActivatedRoute } from '@angular/router';
import { CommonServicesService } from '../../services/common-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  setUpData: ResultData;

  constructor(private route: ActivatedRoute, private services: CommonServicesService) {
  }

  ngOnInit() {}
}

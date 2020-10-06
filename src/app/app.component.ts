import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder, MaxLengthValidator } from '@angular/forms';
import { CommonServicesService } from './view/services/common-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Form: FormGroup;

  constructor(private fb: FormBuilder, private service: CommonServicesService) {
  }

  ngOnInit() {

  }


  onChange(event) {
  }

}

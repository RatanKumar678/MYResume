import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Form: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }
  private createForm() {
    this.Form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

}

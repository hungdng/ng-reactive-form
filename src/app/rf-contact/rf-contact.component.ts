import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rf-contact',
  templateUrl: './rf-contact.component.html',
  styleUrls: ['./rf-contact.component.css']
})
export class RfContactComponent implements OnInit {

  rfContact: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.minLength(3)]],
      email: '',
      social: this.fb.group({
        facebook: ['', [Validators.required, Validators.minLength(3)]],
        twitter: '',
        website: ''
      }),
      tels: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get tels(): FormArray {
    return this.rfContact.get('tels') as FormArray;
  }

  addTel() {
    this.tels.push(this.fb.control(''));
  }

  removeTel(index: number) {
    this.tels.removeAt(index);
  }

  onSubmit() {
    // Do something awesome
    console.log(this.rfContact);
  }

}

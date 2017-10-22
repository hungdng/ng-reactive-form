import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

// export function forbiddenUsername(c: AbstractControl) {
//   const users = ['admin', 'manager'];
//   return (users.includes(c.value)) ? {
//     invalidusername: true
//   } : null;
// }

export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-signup-rform',
  templateUrl: './signup-rform.component.html',
  styleUrls: ['./signup-rform.component.css']
})
export class SignupRformComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email, forbiddenUsername(['admin', 'manager'])]],
      pw: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {
        validator: comparePassword
      })
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}

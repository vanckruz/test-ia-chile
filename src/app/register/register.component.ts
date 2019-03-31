import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterService } from '../register-service';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  users = [];
  form: FormGroup;

  constructor(public registerService: RegisterService, public fb: FormBuilder) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.compose([
        Validators.required,
        Validators.minLength(9),
      ])],
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      rut: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.registerService.get().valueChanges().subscribe(
      (data) => {
        console.log(data)
        this.users = data;
      })
  }

  save() {
    this.registerService.save(this.form.value).subscribe(data => {
      console.log("data", data);
    });
  }
}

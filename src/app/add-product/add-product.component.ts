import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private service:ProductsService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      const data = JSON.stringify(this.registerForm.value, null, 4);
      this.service.postProducts(JSON.parse(data)).subscribe(
        result => { console.log(result); },
        error => { console.log(error); }
      );
      alert('SUCCESS!! :-)\n\n' + data + '\nAddedd Successfully!');
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

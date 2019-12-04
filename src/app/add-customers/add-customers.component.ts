import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private service:CustomersService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
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
       this.service.postCustomer(JSON.parse(data)).subscribe(
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

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, ButtonsModule,AlertModule,BsDropdownModule,TypeaheadModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[FormBuilder, Validators]
})
export class AppComponent
 {
resetForm() {
throw new Error('Method not implemented.');
}
  title ='Formsdesign';
  ContactForm: any;
isExperienced: any;

  SetData()
  {
    this.ContactForm.setValue(
      {
        FirstName: '',
        LastName : '',
        Email :  '',
        Phone : '',
        
  
      }
    );
  }
}

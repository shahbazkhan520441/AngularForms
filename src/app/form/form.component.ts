import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports here
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  submit() {
    console.log("Form submitted", this.user);
  }
}

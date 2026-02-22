import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../service/api-rave';
@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  name: string = '';
  email: string = '';
  message: string = '';
  type: string = 'empresa';

  constructor(private apiService: Api) { }

  sendData() {
    const data = {
      nombre: this.name,
      email: this.email,
      message: this.message,
      type: this.type
    }
    this.apiService.postData(data).subscribe(data => {
      console.log(data)
    })
  }


}

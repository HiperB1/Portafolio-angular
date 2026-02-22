import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from './components/contact-form/contact-form';
import { Userlist } from './components/userlist/userlist';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactForm, Userlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portafolio');
}

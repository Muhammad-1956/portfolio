import { Component } from '@angular/core';
import { contactMethods} from '../../../backend/server'
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactMethods = [
  {
    icon: 'fa-regular fa-envelope',
    title: 'CONTACT.EMAIL.LABEL',
    value: 'CONTACT.EMAIL.VALUE',
    link: 'mailto:mohameddfouad.22@gmail.com?subject=Contact from Portfolio'
  },
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'CONTACT.WHATSAPP.LABEL',
    value: 'CONTACT.WHATSAPP.VALUE',
    link: 'https://wa.me/201124535373?text=Hello%20Muhammad%2C%20I%20saw%20your%20portfolio'
  },
  {
    icon: 'fa-brands fa-facebook-messenger',
    title: 'CONTACT.MESSENGER.LABEL',
    value: 'CONTACT.MESSENGER.VALUE',
    link: 'https://m.me/muhammad.fouad.545'
  }
];

}

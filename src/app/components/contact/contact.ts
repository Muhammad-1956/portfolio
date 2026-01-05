import { Component } from '@angular/core';
import { contactMethods} from '../../../../backend/server'
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactMethods = contactMethods

}

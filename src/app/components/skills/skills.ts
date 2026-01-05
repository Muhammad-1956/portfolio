import { Component } from '@angular/core';
import { skills} from '../../../backend/server'
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = skills
}

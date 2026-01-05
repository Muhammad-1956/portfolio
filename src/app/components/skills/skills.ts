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
  skills = [
  { name1: "Angular", level1: "Advanced", name2: "Firebase", level2: "Advanced" },
  { name1: "HTML", level1: "Advanced", name2: "CSS", level2: "Advanced" },
  { name1: "JAVASCRIPT", level1: "Advanced", name2: "TYPESCRIPT", level2: "Advanced" },
  { name1: "BOOTSTRAP", level1: "Advanced", name2: "SASS", level2: "Advanced" },
  { name1: "TAILWIND", level1: "Advanced", name2: "GIT", level2: "Advanced" }
];
}

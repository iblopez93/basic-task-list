import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task-editor',
  imports: [FontAwesomeModule],
  templateUrl: './task-editor.component.html',
  styleUrl: './task-editor.component.css'
})
export class TaskEditorComponent {
  faSquarePlus=faSquarePlus
}

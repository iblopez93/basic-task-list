import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-task-list';
  showEditor = false;
  faSquarePlus=faSquarePlus

  toggleEditor() {
    console.log("click")
    this.showEditor = !this.showEditor;
  }
}

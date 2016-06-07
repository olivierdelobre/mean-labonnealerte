import { Component } from '@angular/core';
import { AlertsComponent } from './alerts/alerts.component';

@Component({
  moduleId: module.id,
  selector: 'labonnealerte-app',
  templateUrl: 'labonnealerte.component.html',
  styleUrls: ['labonnealerte.component.css'],
  directives: [AlertsComponent]
})
export class LabonnealerteAppComponent {
  title = 'labonnealerte works!';
}

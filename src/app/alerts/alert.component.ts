import { Component, Input } from '@angular/core';

import { Alert } from './alert.model';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent {
    @Input() alert: Alert;

    constructor() { }

}
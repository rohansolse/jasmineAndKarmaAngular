
import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EventClickComponent } from './event-click/event-click.component';

const appRoutes: Routes = [
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'event',
        component: EventClickComponent
    }
];
export default appRoutes;
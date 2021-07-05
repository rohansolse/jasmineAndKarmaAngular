import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import appRoutes from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EventClickComponent } from './event-click/event-click.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EventClickComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

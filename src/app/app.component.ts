import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-project';

}

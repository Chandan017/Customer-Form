import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
    declarations: [
        CustomerDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule // Add FormsModule to imports array
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
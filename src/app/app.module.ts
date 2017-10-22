import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RfContactComponent } from './rf-contact/rf-contact.component';
import { SearchComponent } from './search/search.component';
import { SignupRformComponent } from './signup-rform/signup-rform.component';

@NgModule({
  declarations: [
    AppComponent,
    RfContactComponent,
    SearchComponent,
    SignupRformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

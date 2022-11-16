import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Sibbling1Component } from './sibbling1/sibbling1.component';
import { Sibbling2Component } from './sibbling2/sibbling2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Sibbling1Component,
    Sibbling2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
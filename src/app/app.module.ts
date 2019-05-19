import { RecordsService } from "./records.service";
import { HttpClientService } from "./httpclient.service";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { NgformComponent } from "./ngform/ngform.component";
import { HttpComponentComponent } from './http-component/http-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    TwoWayDataBindingComponent,
    NgformComponent,
    HttpComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [RecordsService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}

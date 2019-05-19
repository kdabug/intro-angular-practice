import { RecordsService } from "./records.service";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { NgformComponent } from "./ngform/ngform.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    TwoWayDataBindingComponent,
    NgformComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

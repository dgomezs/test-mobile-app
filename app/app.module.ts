import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {TestAngular2Module} from "test-angular-2-module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,TestAngular2Module],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

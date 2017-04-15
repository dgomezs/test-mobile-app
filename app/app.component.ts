import {Component} from "@angular/core";
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {TestService} from "test-angular-2-module";
import {RouterExtensions} from "nativescript-angular";
@Component({
    selector: "my-app",
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {

    constructor() {
    }
}

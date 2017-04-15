import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {TestService} from "test-angular-2-module";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";
import {ObservableArray} from "data/observable-array";
import {ListViewEventData, RadListView} from "nativescript-telerik-ui/listview";
@Component({
    selector: "my-header",
    template: "<StackLayout padding='20' horizontalAlignment='center' ><Label fontSize='20' style='text-align: center' text='This is the header'></Label></StackLayout>",
})
export class HeaderComponent {

    constructor() {

    }
}

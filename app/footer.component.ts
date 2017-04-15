import {Component} from "@angular/core";

@Component({
    selector: "my-footer",
    template: "<StackLayout *ngIf='loaded' padding='20' horizontalAlignment='center' ><Label fontSize='20' style='text-align: center' text='This is the footer'></Label></StackLayout>",
})
export class FooterComponent {

    loaded: boolean;

    constructor() {
        this.loaded = true;
    }
}

import { Component } from "@angular/core";
import {TestService} from "test-angular-2-module"
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {


    constructor (private testService: TestService) {

    }

    public get message(): string {
        if (this.testService.getCounter() > 0) {
            return this.testService.getCounter() + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.testService.decrease();
    }
}

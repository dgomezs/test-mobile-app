import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {TestService} from "test-angular-2-module";
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {


    constructor(private testService: TestService, private http: Http) {

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

        let fd = new FormData();

        fd.append("name", "David");

        console.log("submitting form");

        this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
            console.error("Response " +  JSON.stringify(r.json()));
            alert("Form submitted with values " + JSON.stringify(r.json().form));
        }, (error) => {
            console.error("Response " + error.json());
            alert("Error in form " + error.json());

        });

    }
}

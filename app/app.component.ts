import {Component} from "@angular/core";
import {Http, RequestOptions,Headers} from "@angular/http";
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

        let fd = new FormData(),
            options = new RequestOptions();

        options.headers = new Headers();
        options.headers.append("Content-type", "application/x-www-form-urlencoded");
        fd.append("name", "David");

        this.http.post("https://postman-echo.com/post", fd).subscribe((r) => {
            alert("Form submitted with values " + JSON.stringify(r.json().form));
        }, (error) => {
            alert("Error in form " + error.json());

        });

    }
}

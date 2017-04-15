import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {TestService} from "test-angular-2-module";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";
import {ObservableArray} from "data/observable-array";
import {ListViewEventData, RadListView} from "nativescript-telerik-ui/listview";
@Component({
    selector: "my-list",
    templateUrl: "list.component.html",
})
export class ListComponent implements OnInit {

    countries: ObservableArray<string>;
    loaded: boolean;
    footerLoaded: boolean;
    listView: RadListView;

    constructor(private page: Page,
                private changeDetectionRef: ChangeDetectorRef,
                private testService: TestService, private http: Http, private router: RouterExtensions) {

        this.countries = new ObservableArray<string>();

        for (var i = 0; i < 10; i++) {
            this.countries.push("test " + i);
        }

    }

    onLoadMoreGiftIdeas(event: ListViewEventData): void {
        this.listView = event.object;
        console.log("load more");
        setTimeout(() => {
            for (var i = 0; i < 10; i++) {
                this.countries.push("test " + i);
            }
            this.listView.notifyLoadOnDemandFinished();
        });
    }

    reload(): void {
        setTimeout(() => {
            this.loaded = true;
            this.changeDetectionRef.detectChanges();
        },0);
    }


    ngOnInit() {

        this.loaded = true;
        this.footerLoaded = true;
    }

    public get message(): string {
        if (this.testService.getCounter() > 0) {
            return this.testService.getCounter() + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    goToPage(): void {
       // this.loaded = false;
        this.router.navigate(["page"]);
    }

    public onTap() {
        this.testService.decrease();

        let fd = new URLSearchParams(),
            headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"}),
            options = new RequestOptions({headers: headers});


        fd.append("grant_type", "password");
        fd.append("client_id", "angularjs");
        fd.append("username", "mikrodj@gmail.com");
        fd.append("password", "Llina2013");


        console.log("submitting form");

        this.http.post("http://192.168.33.10:9090/auth-service/oauth/token", fd, options).subscribe((r) => {
            console.log("Response " + JSON.stringify(r.json()));
            alert("Form submitted with values " + JSON.stringify(r.json()));
        }, (error) => {
            console.log("Response " + JSON.stringify(error.json()));
            alert("Error in form " + JSON.stringify(error.json()));

        });

    }
}

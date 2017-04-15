import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";


@Component({
    selector: "my-page",
    templateUrl: "page.component.html",
})
export class PageComponent {


    constructor(private router: RouterExtensions) {

    }

    goBack(): void {
        this.router.backToPreviousPage();
    }
}

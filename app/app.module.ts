import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {TestAngular2Module} from "test-angular-2-module";
import {AppComponent} from "./app.component";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {routes} from "./app.routing";
import {NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptUIListViewModule} from "nativescript-telerik-ui/listview/angular";
import {PageComponent} from "./page.component";
import {ListComponent} from "./list.component";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@NgModule({
    declarations: [AppComponent, PageComponent, ListComponent, HeaderComponent, FooterComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        TestAngular2Module, NativeScriptHttpModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}

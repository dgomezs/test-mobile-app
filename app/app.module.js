"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var test_angular_2_module_1 = require("test-angular-2-module");
var app_component_1 = require("./app.component");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var page_component_1 = require("./page.component");
var list_component_1 = require("./list.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, page_component_1.PageComponent, list_component_1.ListComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [nativescript_module_1.NativeScriptModule,
            angular_1.NativeScriptUIListViewModule,
            nativescript_angular_1.NativeScriptRouterModule,
            nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            test_angular_2_module_1.TestAngular2Module, http_1.NativeScriptHttpModule],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCxnRkFBNEU7QUFDNUUsK0RBQXlEO0FBQ3pELGlEQUE2QztBQUM3QyxrREFBaUU7QUFDakUsNkNBQXFDO0FBQ3JDLDZEQUE4RDtBQUM5RCxvRUFBc0Y7QUFDdEYsbURBQStDO0FBQy9DLG1EQUErQztBQUMvQyx1REFBbUQ7QUFDbkQsdURBQW1EO0FBWW5ELElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksU0FBUztJQVZyQixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDhCQUFhLEVBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLGtDQUFlLENBQUM7UUFDNUYsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0I7WUFDeEIsc0NBQTRCO1lBQzVCLCtDQUF3QjtZQUN4QiwrQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztZQUN4QywwQ0FBa0IsRUFBRSw2QkFBc0IsQ0FBQztRQUMvQyxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtUZXN0QW5ndWxhcjJNb2R1bGV9IGZyb20gXCJ0ZXN0LWFuZ3VsYXItMi1tb2R1bGVcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge3JvdXRlc30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvb3RlckNvbXBvbmVudH0gZnJvbSBcIi4vZm9vdGVyLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgUGFnZUNvbXBvbmVudCwgTGlzdENvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnRdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgICAgICBUZXN0QW5ndWxhcjJNb2R1bGUsIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGVdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19
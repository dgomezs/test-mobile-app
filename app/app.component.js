"use strict";
var core_1 = require("@angular/core");
var test_angular_2_module_1 = require("test-angular-2-module");
var AppComponent = (function () {
    function AppComponent(testService) {
        this.testService = testService;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.testService.getCounter() > 0) {
                return this.testService.getCounter() + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.testService.decrease();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [test_angular_2_module_1.TestService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQ0FBMEIsdUJBQzFCLENBQUMsQ0FEZ0Q7QUFLakQ7SUFHSSxzQkFBcUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFN0MsQ0FBQztJQUVELHNCQUFXLGlDQUFPO2FBQWxCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxZQUFZLENBQUM7WUFDeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQywrQ0FBK0MsQ0FBQztZQUMzRCxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFTSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBckJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7b0JBQUE7SUFtQkYsbUJBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLG9CQUFZLGVBa0J4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VGVzdFNlcnZpY2V9IGZyb20gXCJ0ZXN0LWFuZ3VsYXItMi1tb2R1bGVcIlxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHRlc3RTZXJ2aWNlOiBUZXN0U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnRlc3RTZXJ2aWNlLmdldENvdW50ZXIoKSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlc3RTZXJ2aWNlLmdldENvdW50ZXIoKSArIFwiIHRhcHMgbGVmdFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiSG9vcnJhYWF5ISBcXG5Zb3UgYXJlIHJlYWR5IHRvIHN0YXJ0IGJ1aWxkaW5nIVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy50ZXN0U2VydmljZS5kZWNyZWFzZSgpO1xuICAgIH1cbn1cbiJdfQ==
"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var test_angular_2_module_1 = require("test-angular-2-module");
var AppComponent = (function () {
    function AppComponent(testService, http) {
        this.testService = testService;
        this.http = http;
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
        var fd = new FormData(), options = new http_1.RequestOptions();
        options.headers = new http_1.Headers();
        options.headers.append("Content-type", "application/x-www-form-urlencoded");
        fd.append("name", "David");
        this.http.post("https://postman-echo.com/post", fd).subscribe(function (r) {
            alert("Form submitted with values " + JSON.stringify(r.json().form));
        }, function (error) {
            alert("Error in form " + error.json());
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [test_angular_2_module_1.TestService, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0Qsc0NBQTBCLHVCQUF1QixDQUFDLENBQUE7QUFLbEQ7SUFHSSxzQkFBb0IsV0FBd0IsRUFBVSxJQUFVO1FBQTVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUVoRSxDQUFDO0lBRUQsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLFlBQVksQ0FBQztZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLCtDQUErQyxDQUFDO1lBQzNELENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVNLDRCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLElBQUksRUFBRSxHQUFHLElBQUksUUFBUSxFQUFFLEVBQ25CLE9BQU8sR0FBRyxJQUFJLHFCQUFjLEVBQUUsQ0FBQztRQUVuQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFeEUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUM1RCxLQUFLLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQXJDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O29CQUFBO0lBbUNGLG1CQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxvQkFBWSxlQWtDeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucyxIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtUZXN0U2VydmljZX0gZnJvbSBcInRlc3QtYW5ndWxhci0yLW1vZHVsZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVzdFNlcnZpY2U6IFRlc3RTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHApIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy50ZXN0U2VydmljZS5nZXRDb3VudGVyKCkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZXN0U2VydmljZS5nZXRDb3VudGVyKCkgKyBcIiB0YXBzIGxlZnRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIkhvb3JyYWFheSEgXFxuWW91IGFyZSByZWFkeSB0byBzdGFydCBidWlsZGluZyFcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy50ZXN0U2VydmljZS5kZWNyZWFzZSgpO1xuXG4gICAgICAgIGxldCBmZCA9IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuXG4gICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICAgICAgICAgIGZkLmFwcGVuZChcIm5hbWVcIiwgXCJEYXZpZFwiKTtcblxuICAgICAgICB0aGlzLmh0dHAucG9zdChcImh0dHBzOi8vcG9zdG1hbi1lY2hvLmNvbS9wb3N0XCIsIGZkKS5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRm9ybSBzdWJtaXR0ZWQgd2l0aCB2YWx1ZXMgXCIgKyBKU09OLnN0cmluZ2lmeShyLmpzb24oKS5mb3JtKSk7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBpbiBmb3JtIFwiICsgZXJyb3IuanNvbigpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbn1cbiJdfQ==
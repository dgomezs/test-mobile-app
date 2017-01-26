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
        var fd = new FormData();
        fd.append("name", "David");
        console.log("submitting form");
        this.http.post("https://httpbin.org/post", fd).subscribe(function (r) {
            console.error("Response " + r.json());
            alert("Form submitted with values " + JSON.stringify(r.json().form));
        }, function (error) {
            console.error("Response " + error.json());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsc0NBQTBCLHVCQUF1QixDQUFDLENBQUE7QUFLbEQ7SUFHSSxzQkFBb0IsV0FBd0IsRUFBVSxJQUFVO1FBQTVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUVoRSxDQUFDO0lBRUQsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLFlBQVksQ0FBQztZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLCtDQUErQyxDQUFDO1lBQzNELENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVNLDRCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLElBQUksRUFBRSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFeEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztvQkFBQTtJQW1DRixtQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksb0JBQVksZUFrQ3hCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7VGVzdFNlcnZpY2V9IGZyb20gXCJ0ZXN0LWFuZ3VsYXItMi1tb2R1bGVcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlc3RTZXJ2aWNlOiBUZXN0U2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudGVzdFNlcnZpY2UuZ2V0Q291bnRlcigpID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVzdFNlcnZpY2UuZ2V0Q291bnRlcigpICsgXCIgdGFwcyBsZWZ0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJIb29ycmFhYXkhIFxcbllvdSBhcmUgcmVhZHkgdG8gc3RhcnQgYnVpbGRpbmchXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIHRoaXMudGVzdFNlcnZpY2UuZGVjcmVhc2UoKTtcblxuICAgICAgICBsZXQgZmQgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmZC5hcHBlbmQoXCJuYW1lXCIsIFwiRGF2aWRcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0aW5nIGZvcm1cIik7XG5cbiAgICAgICAgdGhpcy5odHRwLnBvc3QoXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIiwgZmQpLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlc3BvbnNlIFwiICsgci5qc29uKCkpO1xuICAgICAgICAgICAgYWxlcnQoXCJGb3JtIHN1Ym1pdHRlZCB3aXRoIHZhbHVlcyBcIiArIEpTT04uc3RyaW5naWZ5KHIuanNvbigpLmZvcm0pKTtcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVzcG9uc2UgXCIgKyBlcnJvci5qc29uKCkpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBpbiBmb3JtIFwiICsgZXJyb3IuanNvbigpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbn1cbiJdfQ==
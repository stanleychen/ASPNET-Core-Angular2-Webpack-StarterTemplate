"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_constants_1 = require('./app.constants');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var footer_component_1 = require('./components/footer/footer.component');
var navigation_component_1 = require('./components/navigation/navigation.component');
var DataService_1 = require('./services/DataService');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular2_toaster_1.ToasterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                footer_component_1.FooterComponent,
                navigation_component_1.NavigationComponent
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                app_constants_1.Configuration,
                DataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
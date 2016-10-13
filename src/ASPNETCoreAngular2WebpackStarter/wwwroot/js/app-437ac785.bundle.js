webpackJsonp([0],{

/***/ 0:
/*!*********************************!*\
  !*** ./angular2App/app/main.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 23);
	__webpack_require__(/*! ../styles/custom.css */ 87);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 24);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 26);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 27);
	var http_1 = __webpack_require__(/*! @angular/http */ 62);
	var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ 60);
	var about_component_1 = __webpack_require__(/*! ./components/about/about.component */ 81);
	var footer_component_1 = __webpack_require__(/*! ./components/footer/footer.component */ 83);
	var navigation_component_1 = __webpack_require__(/*! ./components/navigation/navigation.component */ 85);
	var DataService_1 = __webpack_require__(/*! ./services/DataService */ 61);
	var angular2_toaster_1 = __webpack_require__(/*! angular2-toaster/angular2-toaster */ 64);
	var ng2_slim_loading_bar_1 = __webpack_require__(/*! ng2-slim-loading-bar */ 76);
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
	                angular2_toaster_1.ToasterModule,
	                ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot()
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


/***/ },

/***/ 24:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 25)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 25:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<starterTemplateNavigation></starterTemplateNavigation>\r\n\r\n<div class=\"container\">\r\n    <div class=\"starter-template\">\r\n        <ng2-slim-loading-bar [color]=\"'white'\"></ng2-slim-loading-bar>\r\n        <toaster-container></toaster-container>\r\n        <router-outlet></router-outlet>\r\n\r\n        <hr>\r\n\r\n        <starterTemplateFooter></starterTemplateFooter>\r\n    </div>\r\n</div>\r\n<!-- /.container -->";

/***/ },

/***/ 26:
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	        this.ApiUrl = "api/";
	        this.ServerWithApiUrl = this.Server + this.ApiUrl;
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 27:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 28);
	var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ 60);
	var about_component_1 = __webpack_require__(/*! ./components/about/about.component */ 81);
	var appRoutes = [
	    { path: '', redirectTo: '/home', pathMatch: 'full' },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'about', component: about_component_1.AboutComponent }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 60:
/*!***********************************************************!*\
  !*** ./angular2App/app/components/home/home.component.ts ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var DataService_1 = __webpack_require__(/*! ../../services/DataService */ 61);
	var angular2_toaster_1 = __webpack_require__(/*! angular2-toaster/angular2-toaster */ 64);
	var ng2_slim_loading_bar_1 = __webpack_require__(/*! ng2-slim-loading-bar */ 76);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService, _toasterService, _slimLoadingBarService) {
	        this._dataService = _dataService;
	        this._toasterService = _toasterService;
	        this._slimLoadingBarService = _slimLoadingBarService;
	        this.message = "Hello from HomeComponent constructor";
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._slimLoadingBarService.start();
	        this._dataService
	            .GetAll()
	            .subscribe(function (data) { return _this.values = data; }, function (error) { return function (response) {
	            _this._toasterService.pop('error', 'Damn', 'Something went wrong...');
	        }; }, function () {
	            _this._toasterService.pop('success', 'Complete', 'Getting all values complete');
	            _this._slimLoadingBarService.complete();
	        });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(/*! ./home.component.html */ 80)
	        }), 
	        __metadata('design:paramtypes', [DataService_1.DataService, angular2_toaster_1.ToasterService, ng2_slim_loading_bar_1.SlimLoadingBarService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 61:
/*!*************************************************!*\
  !*** ./angular2App/app/services/DataService.ts ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 62);
	__webpack_require__(/*! rxjs/add/operator/map */ 63);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 26);
	var DataService = (function () {
	    function DataService(_http, _configuration) {
	        var _this = this;
	        this._http = _http;
	        this._configuration = _configuration;
	        this.GetAll = function () {
	            return _this._http.get(_this.actionUrl).map(function (response) { return response.json(); });
	        };
	        this.GetSingle = function (id) {
	            return _this._http.get(_this.actionUrl + id).map(function (res) { return res.json(); });
	        };
	        this.Add = function (itemName) {
	            var toAdd = JSON.stringify({ ItemName: itemName });
	            return _this._http.post(_this.actionUrl, toAdd, { headers: _this.headers }).map(function (res) { return res.json(); });
	        };
	        this.Update = function (id, itemToUpdate) {
	            return _this._http
	                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers })
	                .map(function (res) { return res.json(); });
	        };
	        this.Delete = function (id) {
	            return _this._http.delete(_this.actionUrl + id);
	        };
	        this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    }
	    DataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
	    ], DataService);
	    return DataService;
	}());
	exports.DataService = DataService;


/***/ },

/***/ 80:
/*!*************************************************************!*\
  !*** ./angular2App/app/components/home/home.component.html ***!
  \*************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <!-- Example row of columns -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <br/>\r\n            <br/>\r\n            <h1>{{message}}</h1>\r\n            \r\n            <h3>Values from ASP.NET CORE WebAPI</h3>\r\n            <ul>\r\n                <li *ngFor=\"let value of values\">\r\n                    <span>{{value}} </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /container -->";

/***/ },

/***/ 81:
/*!*************************************************************!*\
  !*** ./angular2App/app/components/about/about.component.ts ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var AboutComponent = (function () {
	    function AboutComponent() {
	        this.message = "Hello from About";
	    }
	    AboutComponent.prototype.ngOnInit = function () {
	    };
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: __webpack_require__(/*! ./about.component.html */ 82)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutComponent);
	    return AboutComponent;
	}());
	exports.AboutComponent = AboutComponent;


/***/ },

/***/ 82:
/*!***************************************************************!*\
  !*** ./angular2App/app/components/about/about.component.html ***!
  \***************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <!-- Example row of columns -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <br/>\r\n            <br/>\r\n            <h1>{{message}}</h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /container -->";

/***/ },

/***/ 83:
/*!***************************************************************!*\
  !*** ./angular2App/app/components/footer/footer.component.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'starterTemplateFooter',
	            template: __webpack_require__(/*! ./footer.component.html */ 84)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;


/***/ },

/***/ 84:
/*!*****************************************************************!*\
  !*** ./angular2App/app/components/footer/footer.component.html ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = "<p>\r\n    &copy; 2016 <a href=\"http://offering.solutions\">Offering.Solutions</a> |\r\n    <a href=\"https://twitter.com/FabianGosebrink\">Fabian Gosebrink Twitter</a></p>";

/***/ },

/***/ 85:
/*!***********************************************************************!*\
  !*** ./angular2App/app/components/navigation/navigation.component.ts ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var NavigationComponent = (function () {
	    function NavigationComponent() {
	    }
	    NavigationComponent = __decorate([
	        core_1.Component({
	            selector: 'starterTemplateNavigation',
	            template: __webpack_require__(/*! ./navigation.component.html */ 86)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavigationComponent);
	    return NavigationComponent;
	}());
	exports.NavigationComponent = NavigationComponent;


/***/ },

/***/ 86:
/*!*************************************************************************!*\
  !*** ./angular2App/app/components/navigation/navigation.component.html ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n                aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/home\">ASP.NETCoreAngular2WebpackDemo</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/home\" class=\"btn\">Home</a></li>\r\n\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/about\" class=\"btn\">About</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n    </div>\r\n</nav>";

/***/ },

/***/ 87:
/*!***************************************!*\
  !*** ./angular2App/styles/custom.css ***!
  \***************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app-437ac785.bundle.js.map
webpackJsonp([0],{

/***/ 0:
/*!*********************************!*\
  !*** ./angular2App/app/main.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 337);
	__webpack_require__(/*! ../styles/custom.css */ 430);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 337:
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
	var core_1 = __webpack_require__(/*! @angular/core */ 11);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 203);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 338);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 340);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 341);
	var http_1 = __webpack_require__(/*! @angular/http */ 405);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 403);
	var about_component_1 = __webpack_require__(/*! ./about/about.component */ 428);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                http_1.JsonpModule
	            ],
	            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent],
	            providers: [
	                app_routes_1.appRoutingProviders,
	                app_constants_1.Configuration
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 338:
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
	var core_1 = __webpack_require__(/*! @angular/core */ 11);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 339)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 339:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n                aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"index.html\">ASPNETCoreAngular2Demo</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"/\" class=\"btn\">Home</a></li>\r\n\r\n                <li><a routerLink=\"/about\" class=\"btn\">About</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"starter-template\">\r\n        <router-outlet></router-outlet>\r\n\r\n        <hr>\r\n\r\n        <footer>\r\n            <p>&copy; 2016 <a href=\"http://offering.solutions\">Offering.Solutions</a> |\r\n                <a href=\"https://twitter.com/FabianGosebrink\">Fabian Gosebrink Twitter</a></p>\r\n        </footer>\r\n    </div>\r\n</div>\r\n<!-- /.container -->";

/***/ },

/***/ 340:
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
	var core_1 = __webpack_require__(/*! @angular/core */ 11);
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

/***/ 341:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 342);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 403);
	var about_component_1 = __webpack_require__(/*! ./about/about.component */ 428);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'about', component: about_component_1.AboutComponent }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 403:
/*!************************************************!*\
  !*** ./angular2App/app/home/home.component.ts ***!
  \************************************************/
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
	var core_1 = __webpack_require__(/*! @angular/core */ 11);
	var common_1 = __webpack_require__(/*! @angular/common */ 205);
	var DataService_1 = __webpack_require__(/*! ../services/DataService */ 404);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService) {
	        this._dataService = _dataService;
	        this.message = "Hello from HomeComponent constructor";
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dataService
	            .GetAll()
	            .subscribe(function (data) { return _this.values = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(/*! ./home.component.html */ 427),
	            directives: [common_1.CORE_DIRECTIVES],
	            providers: [DataService_1.DataService]
	        }), 
	        __metadata('design:paramtypes', [DataService_1.DataService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 404:
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
	var core_1 = __webpack_require__(/*! @angular/core */ 11);
	var http_1 = __webpack_require__(/*! @angular/http */ 405);
	__webpack_require__(/*! rxjs/add/operator/map */ 345);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 340);
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

/***/ 427:
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <!-- Example row of columns -->\r\n    <div class=\"jumbotron\">\r\n            <br/>\r\n            <br/>\r\n            <h1>{{message}}</h1>\r\n            \r\n            <h3>Values from ASP.NET CORE WebAPI</h3>\r\n            <ul>\r\n                <li *ngFor=\"let value of values\">\r\n                    <span>{{value}} </span>\r\n                </li>\r\n            </ul>\r\n    </div>\r\n</div>\r\n<!-- /container -->";

/***/ },

/***/ 428:
/*!**************************************************!*\
  !*** ./angular2App/app/about/about.component.ts ***!
  \**************************************************/
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
	var core_1 = __webpack_require__(/*! @angular/core */ 11);
	var common_1 = __webpack_require__(/*! @angular/common */ 205);
	var AboutComponent = (function () {
	    function AboutComponent() {
	        this.message = "Hello from About";
	    }
	    AboutComponent.prototype.ngOnInit = function () {
	    };
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: __webpack_require__(/*! ./about.component.html */ 429),
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutComponent);
	    return AboutComponent;
	}());
	exports.AboutComponent = AboutComponent;


/***/ },

/***/ 429:
/*!****************************************************!*\
  !*** ./angular2App/app/about/about.component.html ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <!-- Example row of columns -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <br/>\r\n            <br/>\r\n            <h1>{{message}}</h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /container -->";

/***/ },

/***/ 430:
/*!***************************************!*\
  !*** ./angular2App/styles/custom.css ***!
  \***************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app-7eb7f162.bundle.js.map
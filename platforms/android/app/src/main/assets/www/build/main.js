webpackJsonp([1],{

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info/info.module": [
		329,
		0
	],
	"../pages/purchased/purchased.module": [
		168
	],
	"../pages/register/register.module": [
		170
	],
	"../pages/sync/sync.module": [
		171
	],
	"../pages/tabs/tabs.module": [
		176
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedPageModule", function() { return PurchasedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchased__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PurchasedPageModule = /** @class */ (function () {
    function PurchasedPageModule() {
    }
    PurchasedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__purchased__["a" /* PurchasedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__purchased__["a" /* PurchasedPage */]),
            ],
        })
    ], PurchasedPageModule);
    return PurchasedPageModule;
}());

//# sourceMappingURL=purchased.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPageModule", function() { return SyncPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SyncPageModule = /** @class */ (function () {
    function SyncPageModule() {
    }
    SyncPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sync__["a" /* SyncPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sync__["a" /* SyncPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
        })
    ], SyncPageModule);
    return SyncPageModule;
}());

//# sourceMappingURL=sync.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sync_sync__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beacon_beacon_model__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_beacon_provider__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__purchased_purchased__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage(platform, beaconProvider, events) {
        this.platform = platform;
        this.beaconProvider = beaconProvider;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__camera_camera__["a" /* CameraPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__sync_sync__["a" /* SyncPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_8__purchased_purchased__["a" /* PurchasedPage */];
        this.beacons = [];
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]({ enableLongStackTrace: false });
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.platform.ready().then(function () {
                _this.beaconProvider.initialise().then(function (isInitialised) {
                    if (isInitialised) {
                        _this.listenToBeaconEvents();
                    }
                });
            });
        }
    };
    TabsPage.prototype.listenToBeaconEvents = function () {
        var _this = this;
        this.events.subscribe('provic', function (data) {
            alert("Sono qui");
            // update the UI with the beacon list
            _this.zone.run(function () {
                alert("Ciao");
                _this.beacons = [];
                var beaconList = data.beacons;
                beaconList.forEach(function (beacon) {
                    var beaconObject = new __WEBPACK_IMPORTED_MODULE_6__beacon_beacon_model__["a" /* BeaconModel */](beacon);
                    _this.beacons.push(beaconObject);
                });
            });
        });
        function calculateDistance(rssi) {
            var txPower = -59; //hard coded power value. Usually ranges between -59 to -65
            if (rssi == 0) {
                return -1.0;
            }
            var ratio = rssi * 1.0 / txPower;
            if (ratio < 1.0) {
                return Math.pow(ratio, 10);
            }
            else {
                var distance = (0.89976) * Math.pow(ratio, 7.7095) + 0.111;
                return distance;
            }
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Purchased" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Camera" tabIcon="camera"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Sync" tabIcon="sync"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__provider_beacon_provider__["a" /* BeaconProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_service_rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ibeacon__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider_beacon_provider__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, platform, auth, http, restProvider, ibeacon, beaconProvider, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.auth = auth;
        this.http = http;
        this.restProvider = restProvider;
        this.ibeacon = ibeacon;
        this.beaconProvider = beaconProvider;
        this.events = events;
        this.beacons = [];
        this.distance = [];
        this.username = this.auth.getUserInfo()["name"];
        this.email = this.auth.getUserInfo()["email"];
        this.http.get('https://projectkobe.herokuapp.com/issynchronized' + this.email + '').subscribe(function (data) {
            var str = JSON.stringify(data);
            _this.isConnected = data["isConnected"];
            if (_this.isConnected) {
                _this.isConnected = "Si";
            }
            else {
                _this.isConnected = "No";
            }
        });
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\about\about.html"*/'<ion-header ng-app="App">\n  <script src="js/ng-cordova-beacon.min.js"></script>\n  <script src="beacon.js"></script>\n  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>Il tuo nome è: <p style="color: greenyellow">{{username}}</p></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>La tua email è: <p style="color: greenyellow">{{email}}</ion-label>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Connesso con una smartbox: <p style="color: greenyellow">{{isConnected}}</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n  <p style="color: lightgray; font-family: \'Harlow Solid Italic\'; font-size: 19px">\n    Applicazione creata per la tesi triennale in ingegneria dell\'informazione dal tesista: Taccardi Benito, relatore: Prof.Luigi Patrono\n  </p>\n\n</ion-content>\n\n<!--<ion-content>\n  <ion-list no-lines>\n    <ion-item *ngFor="let beacon of beacons">\n      <ion-grid>\n        <ion-row>\n          <ion-col>Major</ion-col>\n          <ion-col>{{beacon.major}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Minor</ion-col>\n          <ion-col>{{beacon.minor}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>RSSI</ion-col>\n          <ion-col>{{calculateDistance(beacon.rssi)}}m</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n</ion-content>-->\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__provider_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_service_rest_service__["a" /* RestServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_ibeacon__["a" /* IBeacon */], __WEBPACK_IMPORTED_MODULE_6__provider_beacon_provider__["a" /* BeaconProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraPage = /** @class */ (function () {
    function CameraPage(camera) {
        this.camera = camera;
    }
    CameraPage.prototype.ionViewDidEnter = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
        alert("CIao");
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\camera\camera.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Camera\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header></ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\camera\camera.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, app, navCtrl, auth, restProvider, tts) {
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.restProvider = restProvider;
        this.tts = tts;
        var info = this.auth.getUserInfo();
        this.username = info['name'];
        this.email = info['email'];
    }
    HomePage.prototype.getProducts = function () {
        var _this = this;
        this.products = null;
        this.restProvider.getUserInfo(this.email).then(function (data) {
            _this.restProvider.getProducts(data["iduser"])
                .then(function (data) {
                _this.products = data;
                console.log(data);
            });
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.getProducts();
        setTimeout(function () {
            refresher.complete();
        }, 500);
    };
    HomePage.prototype.doRefresh2 = function () {
        this.getProducts();
        setTimeout(function () {
        }, 500);
    };
    HomePage.prototype.deleteFunct = function (item, refresher) {
        console.log(item);
        this.restProvider.deleteProduct(item);
        this.doRefresh2();
        /*this.getProducts();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);*/
    };
    HomePage.prototype.purchaseFunct = function (item, refresher) {
        console.log(item);
        this.restProvider.purchaseProduct(item);
        this.doRefresh2();
        /*this.getProducts();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);*/
    };
    HomePage.prototype.isEmpty = function () {
        if (this.products.lenght == 0) {
            return true;
        }
        return false;
    };
    HomePage.prototype.speech = function (itemName) {
        this.tts.speak(itemName)
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
    };
    HomePage.prototype.openMenu = function () {
        if (this.menuCtrl.isOpen())
            this.menuCtrl.close();
        else
            this.menuCtrl.open();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getProducts();
        this.doRefresh2();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getProducts();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'projectKobe',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\home\home.html"*/'<html ng-app="projectKobe">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\n    <script src="http://code.ionicframework.com/nightly/js/ionic.bundle.js"></script>\n    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>\n\n  </head>\n\n  <body ng-controller="MainCtrl" id="body">\n\n\n    <ion-content class="outer-content">\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <ion-menu [content]="content">\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n        <ion-content>\n          <ion-list >\n            <button ion-button (click)="logout()" outline >Logout</button>\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n\n      <!-- main navigation -->\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n      <ion-list>\n        <ion-list-header>\n\n          <button ion-button menuToggle="right" (click)="openMenu()"> <ion-icon name="menu"> </ion-icon></button>\n          Shopping list\n        </ion-list-header>\n\n       <!-- <img *ngIf="!products" class="noProduct" src="assets/icon/no.jpg">-->\n\n        <ion-item-sliding *ngFor="let p of products">\n          <ion-item no-lines (click)="speech(p.productname)">\n            <ion-avatar item-start>\n              <img src= "{{ p.path }}">\n            </ion-avatar>\n            <h2> {{ p.productname }} </h2>\n          </ion-item>\n          <ion-item-options>\n            <button (click)="deleteFunct(p.idproduct, $event)" ion-button color="danger" icon-start large>\n              <ion-icon name="trash"></ion-icon>\n            </button>\n            <button ion-button color="secondary" (click)="purchaseFunct(p.idproduct, $event)" icon-start large>\n              <ion-icon name="checkmark"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n\n\n\n      </ion-list>\n\n    </ion-content>\n  </body>\n</html>\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__provider_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__["a" /* RestServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_camera_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sync_sync__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_geolocation__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__provider_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_rest_service_rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sync_sync_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_ibeacon__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__provider_beacon_provider__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_text_to_speech__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_purchased_purchased__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_purchased_purchased_module__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchased/purchased.module#PurchasedPageModule', name: 'PurchasedPage', segment: 'purchased', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sync/sync.module#SyncPageModule', name: 'SyncPage', segment: 'sync', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_sync_sync_module__["SyncPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_purchased_purchased_module__["PurchasedPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sync_sync__["a" /* SyncPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_purchased_purchased__["a" /* PurchasedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__["a" /* OneSignal */],
                [__WEBPACK_IMPORTED_MODULE_24__provider_beacon_provider__["a" /* BeaconProvider */]],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__provider_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_rest_service_rest_service__["a" /* RestServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_ibeacon__["a" /* IBeacon */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_text_to_speech__["a" /* TextToSpeech */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, auth, alertCtrl, restProvider) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    RegisterPage.prototype.registerNewUser = function () {
        this.restProvider.registerNewUser(this.email, this.username, this.password);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                console.log(_this.registerCredentials.password);
                _this.email = _this.registerCredentials.email;
                _this.password = _this.registerCredentials.password;
                _this.username = _this.email.slice(0, _this.email.search('@'));
                _this.createSuccess = true;
                _this.registerNewUser();
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.loginArea = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\register\register.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/icon/logo.png" class="logo"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n    <button ion-button class="login-btn" block clear (click)="loginArea()">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__provider_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__["a" /* RestServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello RestServiceProvider Provider');
    }
    AuthService.prototype.login = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            this.currentUser = new User(credentials.email.slice(0, credentials.email.search('@')), credentials.email);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                //let access = (credentials.password === credentials.password && credentials.email === credentials.email);
                // set thereal user
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            this.http.get('https://projectkobe.herokuapp.com/register{credential.email}/').subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconModel; });
var BeaconModel = /** @class */ (function () {
    function BeaconModel(beacon) {
        this.beacon = beacon;
        this.uuid = beacon.uuid;
        this.major = beacon.major;
        this.minor = beacon.minor;
        this.rssi = beacon.rssi;
    }
    return BeaconModel;
}());

//# sourceMappingURL=beacon-model.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestServiceProvider = /** @class */ (function () {
    function RestServiceProvider(http) {
        this.http = http;
        console.log('Hello RestServiceProvider Provider');
    }
    RestServiceProvider.prototype.getProducts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/getproduct' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.getPurchasedProducts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/getpurchasedproduct' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.deleteProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/deleteproduct' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.reinsertProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/reinsertproduct' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.purchaseProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/purchaseproduct' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.registerNewUser = function (email, username, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/register' + email + '/' + username + '/' + password).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.validateUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/login' + email + '/' + password).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider.prototype.getUserInfo = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://projectkobe.herokuapp.com/userinfo' + email).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestServiceProvider);
    return RestServiceProvider;
}());

//# sourceMappingURL=rest-service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login = /** @class */ (function () {
    function Login(nav, auth, alertCtrl, loadingCtrl, restProvider) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.registerCredentials = { email: 'benny.taccardi@gmail.com', password: 'benny' };
    }
    Login.prototype.validateUser = function () {
        var _this = this;
        var tmpString = null;
        this.restProvider.validateUser(this.registerCredentials.email, this.registerCredentials.password)
            .then(function (data) {
            tmpString = JSON.stringify(data);
            if (tmpString == "false") {
                _this.showError("Access Denied");
            }
            else {
                _this.registerCredentials.email = JSON.parse(tmpString).email;
                _this.registerCredentials.password = JSON.parse(tmpString).password;
                _this.email = JSON.parse(tmpString).email;
                _this.password = JSON.parse(tmpString).password;
                _this.auth.login(_this.registerCredentials);
                _this.showLoading();
                console.log("Hi");
                setTimeout(function (data) {
                    _this.nav.push('TabsPage');
                }, 1500);
            }
        });
    };
    Login.prototype.createAccount = function () {
        this.nav.push('RegisterPage');
    };
    Login.prototype.login = function () {
        this.validateUser();
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    Login.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/icon/logo.png" class="logo"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">\n            <ion-icon name="log-in" class="login-label"></ion-icon>Login\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__provider_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__["a" /* RestServiceProvider */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_service_rest_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_text_to_speech__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PurchasedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchasedPage = /** @class */ (function () {
    function PurchasedPage(navCtrl, navParams, restProvider, auth, tts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.auth = auth;
        this.tts = tts;
        var info = this.auth.getUserInfo();
        this.username = info['name'];
        this.email = info['email'];
    }
    PurchasedPage.prototype.getPurchasedProducts = function () {
        var _this = this;
        this.products = null;
        this.restProvider.getUserInfo(this.email).then(function (data) {
            _this.restProvider.getPurchasedProducts(data["iduser"])
                .then(function (data) {
                _this.products = data;
                console.log(data);
            });
        });
    };
    PurchasedPage.prototype.doRefresh = function (refresher) {
        this.getPurchasedProducts();
        setTimeout(function () {
            refresher.complete();
        }, 500);
    };
    PurchasedPage.prototype.doRefresh2 = function () {
        this.getPurchasedProducts();
        setTimeout(function () {
        }, 500);
    };
    PurchasedPage.prototype.deleteFunct = function (item, refresher) {
        console.log(item);
        this.restProvider.deleteProduct(item);
        this.doRefresh2();
    };
    PurchasedPage.prototype.reinsertFunct = function (item, refresher) {
        console.log(item);
        this.restProvider.reinsertProduct(item);
        this.doRefresh2();
    };
    PurchasedPage.prototype.speech = function (itemName) {
        this.tts.speak(itemName)
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    PurchasedPage.prototype.ionViewWillEnter = function () {
        this.getPurchasedProducts();
        this.doRefresh2();
    };
    PurchasedPage.prototype.ionViewDidLoad = function () {
        this.getPurchasedProducts();
    };
    PurchasedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-purchased',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\purchased\purchased.html"*/'<!--\n  Generated template for the PurchasedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-list-header>\n      Purchased products\n    </ion-list-header>\n\n    <!--<img *ngIf="!products" class="noProduct" src="assets/icon/no.jpg">-->\n\n    <ion-item-sliding *ngFor="let p of products">\n      <ion-item no-lines (click)="speech(p.productname)">\n        <ion-avatar item-start>\n          <img src= "{{ p.path }}">\n        </ion-avatar>\n        <h2> {{ p.productname }} </h2>\n      </ion-item>\n      <ion-item-options>\n        <button (click)="deleteFunct(p.idproduct)" ion-button color="danger" icon-start large>\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        <button ion-button color="light" (click)="reinsertFunct(p.idproduct, $event)" icon-start large>\n          <ion-icon name="repeat"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\purchased\purchased.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_service_rest_service__["a" /* RestServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__provider_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], PurchasedPage);
    return PurchasedPage;
}());

//# sourceMappingURL=purchased.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SyncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SyncPage = /** @class */ (function () {
    function SyncPage(navCtrl, navParams, http, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.qrData = "Ciao";
        this.createdCode = null;
        var info = this.auth.getUserInfo();
        this.qrData = info['email'];
        this.http.get('https://projectkobe.herokuapp.com/userinfo' + this.qrData).subscribe(function (data) {
            var str = JSON.stringify(data);
            str = str.substring(str.indexOf(":") + 2);
            str = str.substring(0, str.indexOf("\""));
            _this.qrData = str;
            _this.createdCode = _this.qrData;
        });
    }
    SyncPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SyncPage');
    };
    SyncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sync',template:/*ion-inline-start:"C:\xampp\htdocs\projectKobe\src\pages\sync\sync.html"*/'<!--\n  Generated template for the SyncPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="createdCode">\n    <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\projectKobe\src\pages\sync\sync.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__provider_auth_service__["a" /* AuthService */]])
    ], SyncPage);
    return SyncPage;
}());

//# sourceMappingURL=sync.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ibeacon__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeaconProvider = /** @class */ (function () {
    function BeaconProvider(platform, events, ibeacon, localNotifications, http) {
        this.platform = platform;
        this.events = events;
        this.ibeacon = ibeacon;
        this.localNotifications = localNotifications;
        this.http = http;
    }
    /*initialise(): any {
      this.region = [];
      this.http.get('https://projectkobe.herokuapp.com/getmarket').subscribe(data => {

        let promise = new Promise((resolve, reject) => {
          // we need to be running on a device
          if (this.platform.is('cordova')) {

            // Request permission to use location on iOS
            this.ibeacon.requestAlwaysAuthorization();

            // create a new delegate and register it with the native layer
            this.delegate = this.ibeacon.Delegate();

            // Subscribe to some of the delegate's event handlers
            this.delegate.didRangeBeaconsInRegion()
              .subscribe(
                data => {

                  this.events.publish('didRangeBeaconsInRegion', data);
                },
                error => console.error()
              );

            // setup a beacon region
            for(let i = 0;i<2;i++)
            {
              this.region[i] = this.ibeacon.BeaconRegion('deskBeacon' + i, data[i].UUID);
              alert(data[i].UUID);
            }

            // start ranging
            for(let i = 0; i<2; i++)
            {
              this.ibeacon.startRangingBeaconsInRegion(this.region[i])
                .then(
                  () => {
                    resolve(true);
                    alert("Ciao");
                  },
                  error => {
                    console.error('Failed to begin monitoring: ', error);
                    resolve(false);
                  }
                );

            }



          } else {
            console.error("This application needs to be running on a device");
            resolve(false);
          }
        });

        return promise;
      });


    }*/
    BeaconProvider.prototype.initialise = function () {
        var _this = this;
        this.region = [];
        this.http.get('https://projectkobe.herokuapp.com/getmarket').subscribe(function (data) {
            var promise = new Promise(function (resolve, reject) {
                // we need to be running on a device
                if (_this.platform.is('cordova')) {
                    // Request permission to use location on iOS
                    _this.ibeacon.requestAlwaysAuthorization();
                    // create a new delegate and register it with the native layer
                    _this.delegate = _this.ibeacon.Delegate();
                    for (var i = 0; i < 2; i++) {
                        _this.region[i] = _this.ibeacon.BeaconRegion(data[i].name, data[i].UUID);
                    }
                    // Subscribe to some of the delegate's event handlers
                    var self_1 = _this.localNotifications;
                    _this.delegate.didDetermineStateForRegion = function (pluginResult) {
                        if (pluginResult.state == "CLRegionStateInside") {
                            self_1.schedule({
                                title: 'ProjectKobe',
                                lockscreen: true,
                                id: 1,
                                text: 'Nelle vicinanze c\'è un supermercato',
                                sound: 'file://sound.mp3'
                            });
                        }
                    };
                    _this.delegate.didStartMonitoringForRegion = function (pluginResult) {
                        console.log('didStartMonitoringForRegion:', pluginResult);
                        //alert('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
                    };
                    _this.delegate.didRangeBeaconsInRegion = function (pluginResult) {
                        //alert('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
                    };
                    cordova.plugins.locationManager.setDelegate(_this.delegate);
                    // required in iOS 8+
                    cordova.plugins.locationManager.requestWhenInUseAuthorization();
                    // or cordova.plugins.locationManager.requestAlwaysAuthorization()
                    for (var i = 0; i < 2; i++) {
                        cordova.plugins.locationManager.startMonitoringForRegion(_this.region[i])
                            .fail(function (e) {
                            console.error(e);
                        })
                            .done();
                    }
                }
                else {
                    console.error("This application needs to be running on a device");
                    resolve(false);
                }
            });
            return promise;
        });
    };
    BeaconProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ibeacon__["a" /* IBeacon */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], BeaconProvider);
    return BeaconProvider;
}());

//# sourceMappingURL=beacon-provider.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map
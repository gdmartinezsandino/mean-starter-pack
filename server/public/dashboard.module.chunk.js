webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/components/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"Dashboard\" role=\"main\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n  <mat-sidenav-container>\n    <mat-sidenav\n      #sidenav\n      class=\"Dashboard__sidenav mat-elevation-z2\"\n      [ngClass]=\"{'is-closed': !sidenav.opened}\"\n      fixedTopGap=\"56\"\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      [fixedInViewport]=\"mobileQuery.matches\"\n      (keydown.escape)=\"closeSidenav()\">\n\n      <div class=\"Dashboard__sidenav__brand grid-noGutter-center-middle mat-elevation-z2\" [ngClass]=\"{ 'is-closed' : sidenavIsClosed}\">\n        <img (click)=\"goHome()\" src=\"../../../assets/images/logo.svg\">\n        <img (click)=\"goHome()\" class=\"is-closed\" src=\"../../../assets/images/logo-symbol.svg\">\n      </div>\n\n      <nav class=\"Dashboard__sidenav__menu grid-noGutter\">\n        <mat-nav-list class=\"menu-top col-12\">\n          <a mat-list-item [routerLink]=\"['/dashboard']\">\n            <mat-icon>view_quilt</mat-icon>\n            <span>Vista General</span>\n          </a>\n\n          <a mat-list-item [routerLink]=\"['/dashboard/analytics']\">\n            <mat-icon>signal_cellular_alt</mat-icon>\n            <span>Analytics</span>\n          </a>\n\n          <a mat-list-item class=\"is-disabled\" [routerLink]=\"['/dashboard/settings']\" *ngIf=\"user.role !== 'Sucursal'\">\n            <mat-icon>settings</mat-icon>\n            <span>Ajustes</span>\n          </a>\n        </mat-nav-list>\n\n        <mat-nav-list class=\"menu-bottom col-12\">\n          <mat-menu #profileMenu=\"matMenu\" [class]=\"'profile-menu'\">\n            <button mat-menu-item [routerLink]=\"['/dashboard/profile']\">Ver perfil</button>\n            <button mat-menu-item (click)=\"changePassword()\">Cambiar contraseña</button>\n            <button mat-menu-item (click)=\"logout()\">Desconectarse</button>\n          </mat-menu>\n\n          <a mat-list-item class=\"profile is-disabled\" [matMenuTriggerFor]=\"profileMenu\">\n            <mat-icon *ngIf=\"!avatar; else existAvatar\">account_circle</mat-icon>\n            <ng-template #existAvatar>\n              <img src=\"{{ avatar }}\" alt=\"{{ user.username }}\">\n            </ng-template>\n            <span>Perfil</span>\n          </a>\n\n          <a mat-list-item class=\"is-disabled\" [routerLink]=\"['/dashboard/contact']\">\n            <mat-icon>help</mat-icon>\n            <span>Ayuda</span>\n          </a>\n        </mat-nav-list>\n      </nav>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"Dashboard__container\" displayHeight [ngClass]=\"{'is-closed': !sidenav.opened}\">\n      <section class=\"Dashboard__container__content\">\n        <button mat-icon-button class=\"sidenav-close col-auto\" (click)=\"sidenav.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n        <router-outlet></router-outlet>\n        <app-good-job-back-top position=\"200\"></app-good-job-back-top>\n      </section>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.Dashboard__sidenav {\n  width: 270px;\n  background-color: #F9F7F9;\n  overflow-x: hidden;\n  transition-property: transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in; }\n  .Dashboard__sidenav__brand {\n    height: 125px; }\n    .Dashboard__sidenav__brand img {\n      width: 170px;\n      cursor: pointer; }\n      .Dashboard__sidenav__brand img.is-closed {\n        position: absolute;\n        width: 60px;\n        height: 85px;\n        opacity: 0;\n        transition-timing-function: ease-in-out;\n        z-index: -10; }\n  .Dashboard__sidenav__menu {\n    height: calc(100% - 125px); }\n    .Dashboard__sidenav__menu .mat-nav-list {\n      transition-property: padding-right, padding-left;\n      transition-timing-function: ease-in;\n      transition-duration: 0.2s; }\n      .Dashboard__sidenav__menu .mat-nav-list .mat-list-item {\n        color: #8F949F;\n        font-family: \"OpenSans-Regular\";\n        font-size: 16px;\n        line-height: 22px;\n        position: relative;\n        height: auto;\n        padding: 10px;\n        color: #8F949F;\n        font-family: \"OpenSans-SemiBold\";\n        text-align: center;\n        transition-property: background-color, font-size;\n        transition-duration: 0.2s;\n        transition-timing-function: ease-in;\n        overflow: hidden; }\n        .Dashboard__sidenav__menu .mat-nav-list .mat-list-item.profile img {\n          position: relative;\n          left: -5px;\n          width: 35px;\n          height: 35px;\n          padding: 3px;\n          border: 2px solid #6E8ABA;\n          border-radius: 50%; }\n        .Dashboard__sidenav__menu .mat-nav-list .mat-list-item .mat-icon {\n          width: 35px;\n          height: 35px;\n          margin-right: 10px;\n          color: #6E8ABA;\n          font-size: 35px;\n          transition-property: color;\n          transition-duration: 0.2s;\n          transition-timing-function: ease-in; }\n        .Dashboard__sidenav__menu .mat-nav-list .mat-list-item:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          background-color: #6E8ABA;\n          transition-property: width;\n          transition-duration: 0.2s;\n          transition-timing-function: ease-in-out; }\n        .Dashboard__sidenav__menu .mat-nav-list .mat-list-item.is-active:after, .Dashboard__sidenav__menu .mat-nav-list .mat-list-item:hover:after {\n          width: 6px;\n          transition-timing-function: ease-in; }\n        .Dashboard__sidenav__menu .mat-nav-list .mat-list-item.is-active .mat-icon, .Dashboard__sidenav__menu .mat-nav-list .mat-list-item:hover .mat-icon {\n          color: #8F949F;\n          transition-timing-function: ease-in; }\n  .Dashboard__sidenav.is-closed {\n    width: 90px;\n    transform: translate3d(0, 0, 0);\n    visibility: visible !important;\n    transition-timing-function: ease-in-out; }\n    .Dashboard__sidenav.is-closed .Dashboard__sidenav__brand img {\n      opacity: 0;\n      z-index: -10; }\n      .Dashboard__sidenav.is-closed .Dashboard__sidenav__brand img.is-closed {\n        opacity: 1;\n        z-index: 10; }\n    .Dashboard__sidenav.is-closed .Dashboard__sidenav__menu .mat-nav-list {\n      transition-timing-function: ease-in-out; }\n      .Dashboard__sidenav.is-closed .Dashboard__sidenav__menu .mat-nav-list .mat-list-item {\n        font-size: 0;\n        text-align: center;\n        transition-timing-function: ease-in-out; }\n        .Dashboard__sidenav.is-closed .Dashboard__sidenav__menu .mat-nav-list .mat-list-item.profile img {\n          left: 0; }\n\n.Dashboard__container {\n  background-color: #EDEDED; }\n  .Dashboard__container.is-closed {\n    padding-left: 90px; }\n  .Dashboard__container__content {\n    padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_store__ = __webpack_require__("../../../../../src/app/core/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_store__ = __webpack_require__("../../../../../src/app/presentation/modules/login/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_store__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_services__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DashboardComponent = (function () {
    function DashboardComponent(changeDetectorRef, media, _service, _storeCore, _storeLogin, _storeProfile, _utils, _formBuilder) {
        var _this = this;
        this._service = _service;
        this._storeCore = _storeCore;
        this._storeLogin = _storeLogin;
        this._storeProfile = _storeProfile;
        this._utils = _utils;
        this._formBuilder = _formBuilder;
        this.displayHeight = '';
        this.sidenavIsClosed = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.user = this._service.getUserLogged();
        this.avatar = this._service.getUserAvatar(this.user.image);
        this.user$ = this._storeProfile.pipe(Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_8__profile_store__["i" /* getUser */]));
        this.user$.subscribe(function (user) {
            _this.user = _this._service.getUserLogged();
            _this.avatar = _this._service.getUserAvatar(_this.user.image);
            _this.changePasswordForm = _this._formBuilder.group({
                _id: [_this.user._id, ''],
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            }, {
                validator: __WEBPACK_IMPORTED_MODULE_5__shared_services__["a" /* ConfirmPassword */].validate.bind(_this)
            });
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.displayHeight = window.innerHeight + "px";
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    DashboardComponent.prototype.closeSidenav = function () {
        this.sidenav.close();
        this.sidenavIsClosed = true;
    };
    DashboardComponent.prototype.goHome = function () {
        this._storeCore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__core_store__["b" /* Go */]({
            path: ['dashboard']
        }));
    };
    DashboardComponent.prototype.logout = function () {
        this._storeLogin.dispatch(new __WEBPACK_IMPORTED_MODULE_7__login_store__["b" /* Logout */]());
    };
    DashboardComponent.prototype.changePassword = function () {
        var _this = this;
        this._utils.showDialog({
            width: 500,
            data: {
                title: 'Cambiar contraseña',
                formElement: this.changePasswordForm,
                model: this.changePasswordForm.value,
                confirm: true,
                form: [
                    { name: 'password', type: 'password', placeholder: 'Contraseña nueva' },
                    { name: 'confirmPassword', type: 'password', placeholder: 'Repita contraseña' },
                ],
                onChange: function (model) {
                    _this.changePasswordForm.patchValue(model);
                },
            },
            onClose: function (result) {
                if (result.action) {
                    _this._storeProfile.dispatch(new __WEBPACK_IMPORTED_MODULE_8__profile_store__["a" /* UpdatingPassword */](_this.changePasswordForm.value));
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSidenav */])
    ], DashboardComponent.prototype, "sidenav", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-pages',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/dashboard/components/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/components/dashboard.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_9__profile_services__["a" /* ProfileService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_9__profile_services__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/components/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });

var components = [
    __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
];



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_guards__ = __webpack_require__("../../../../../src/app/core/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/dashboard/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: __WEBPACK_IMPORTED_MODULE_5__components__["b" /* components */].slice(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__["a" /* DashboardRouting */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__core_guards__["c" /* AuthenticatedGuard */],
                __WEBPACK_IMPORTED_MODULE_3__core_guards__["b" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_3__core_guards__["d" /* CompanyGuard */],
                __WEBPACK_IMPORTED_MODULE_3__core_guards__["a" /* ActivatedGuard */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("../../../../../src/app/dashboard/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_guards__ = __webpack_require__("../../../../../src/app/core/guards/index.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components__["a" /* DashboardComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards__["c" /* AuthenticatedGuard */], __WEBPACK_IMPORTED_MODULE_2__core_guards__["a" /* ActivatedGuard */]],
                loadChildren: 'app/dashboard/modules/home/home.module#HomeModule',
                data: { breadcrumb: 'Inicio' }
            },
            {
                path: 'profile',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards__["c" /* AuthenticatedGuard */], __WEBPACK_IMPORTED_MODULE_2__core_guards__["a" /* ActivatedGuard */]],
                loadChildren: 'app/dashboard/modules/profile/profile.module#ProfileModule',
                data: { breadcrumb: 'Perfil' }
            },
            {
                path: 'settings',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards__["c" /* AuthenticatedGuard */], __WEBPACK_IMPORTED_MODULE_2__core_guards__["a" /* ActivatedGuard */]],
                loadChildren: 'app/dashboard/modules/settings/settings.module#SettingsModule',
                data: { breadcrumb: 'Configuración' }
            },
        ]
    }
];
var DashboardRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map
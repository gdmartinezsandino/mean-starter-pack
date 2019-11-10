webpackJsonp(["presentation.module"],{

/***/ "../../../../../src/app/presentation/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__presentation_component__ = __webpack_require__("../../../../../src/app/presentation/components/presentation.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__presentation_component__["a"]; });

var components = [
    __WEBPACK_IMPORTED_MODULE_0__presentation_component__["a" /* PresentationComponent */]
];



/***/ }),

/***/ "../../../../../src/app/presentation/components/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"Presentation grid-center-middle\" displayHeight>\n  <div class=\"Presentation__container col-5_xs-12_sm-6\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/presentation/components/presentation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.Presentation {\n  background-color: #F1F1F1;\n  overflow: hidden; }\n  .Presentation__element {\n    padding: 40px;\n    background-color: #FFFFFF; }\n    .Presentation__element__header figure {\n      margin: 0;\n      padding: 0;\n      text-align: center; }\n      .Presentation__element__header figure img {\n        width: 180px; }\n      .Presentation__element__header figure figcaption {\n        color: #8F949F;\n        font-family: \"OpenSans-SemiBold\";\n        font-size: 18px;\n        line-height: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/presentation/components/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresentationComponent = (function () {
    function PresentationComponent() {
    }
    PresentationComponent.prototype.ngOnInit = function () {
        this.displayHeight = window.innerHeight + "px";
    };
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-presentation',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/presentation/components/presentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/presentation/components/presentation.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/presentation/presentation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_guards__ = __webpack_require__("../../../../../src/app/core/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentation_routing__ = __webpack_require__("../../../../../src/app/presentation/presentation.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/presentation/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PresentationModule = (function () {
    function PresentationModule() {
    }
    PresentationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: __WEBPACK_IMPORTED_MODULE_5__components__["b" /* components */].slice(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__presentation_routing__["a" /* PresentationRouting */]
            ],
            providers: __WEBPACK_IMPORTED_MODULE_3__core_guards__["f" /* guards */].slice()
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "../../../../../src/app/presentation/presentation.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("../../../../../src/app/presentation/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_guards__ = __webpack_require__("../../../../../src/app/core/guards/index.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components__["a" /* PresentationComponent */],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards__["e" /* LoggedInGuard */]],
                loadChildren: 'app/presentation/modules/login/login.module#LoginModule',
            },
            {
                path: 'recovery-password',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards__["e" /* LoggedInGuard */]],
                loadChildren: 'app/presentation/modules/recovery-password/recovery-password.module#RecoveryPasswordModule',
            },
            {
                path: 'active-user',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guards__["e" /* LoggedInGuard */]],
                loadChildren: 'app/presentation/modules/active-user/active-user.module#ActiveUserModule',
            },
        ]
    },
];
var PresentationRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=presentation.module.chunk.js.map
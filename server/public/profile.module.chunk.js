webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/dashboard/modules/profile/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/components/profile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_component__["a"]; });

var components = [
    __WEBPACK_IMPORTED_MODULE_0__profile_component__["a" /* ProfileComponent */],
];



/***/ }),

/***/ "../../../../../src/app/dashboard/modules/profile/components/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"Profile panel grid-spaceBetween-static\">\n  <header class=\"Profile__header panel-header col-12 mb-20\">\n    <h1>Perfil de usuario</h1>\n    <p>Administra tu información personal</p>\n  </header>\n\n  <div class=\"col-5_xs-12_sm-12\">\n    <div class=\"Profile__info panel-container\">\n      <div class=\"Profile__info__box Profile__info__box--avatar\">\n        <div class=\"avatar mat-elevation-z6\" [ngClass]=\"{'is-empty': !avatarpath}\">\n          <i *ngIf=\"!avatarpath && uploader.queue.length == 0; else existAvatar\" class=\"material-icons\">account_circle</i>\n          <ng-template #existAvatar>\n            <img src=\"{{ avatarpath }}\" title=\"{{ user.username }}\">\n          </ng-template>\n\n          <div\n            ng2FileDrop\n            [ngClass]=\"{'is-dropped': hasBaseDropZoneOver}\"\n            [uploader]=\"uploader\"\n            (fileOver)=\"fileDropped($event)\"\n            class=\"drop-zone\">\n          </div>\n\n          <label *ngIf=\"uploader.queue.length == 0\" class=\"input-file-wrapper\">\n            <i class=\"material-icons\">add_circle_outline</i>\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n          </label>\n\n          <div *ngFor=\"let image of uploader.queue\" class=\"drop-zone__data grid-noGutter-center-middle\">\n            <mat-progress-spinner [diameter]=\"200\" [strokeWidth]=\"3\" [color]=\"color\" [mode]=\"upFileProgressBarMode\" [value]=\"uploader.progress\">\n            </mat-progress-spinner>\n\n            <div class=\"col-12 align-center\">\n              <span class=\"data-namefile mb-10\">{{ image?.file?.name }}</span>\n              <span class=\"data-sizefile mb-10\">{{ image?.file?.size/1024/1024 | number:'.2' }} MB</span>\n              <div class=\"data-actions grid-top-center\">\n                <button mat-mini-fab (click)=\"image.upload()\" [disabled]=\"image.isReady || image.isUploading || image.isSuccess\" data-action=\"upload\">\n                  <mat-icon>file_upload</mat-icon>\n                </button>\n\n                <button mat-mini-fab (click)=\"image.cancel()\" [disabled]=\"!image.isUploading\" data-action=\"cancel\">\n                  <mat-icon>cancel</mat-icon>\n                </button>\n\n                <button mat-mini-fab (click)=\"image.remove()\" data-action=\"remove\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.name || user.lastname\" class=\"detail mt-30\">\n          <h1>{{ user.name }} {{ user.lastname }}</h1>\n        </div>\n      </div>\n\n      <div *ngIf=\"user.phone || user.email || user.city || user.country\" class=\"Profile__info__box Profile__info__box--contact-info\">\n        <h4>Información de contacto</h4>\n        <p *ngIf=\"user.phone\" class=\"grid-noGutter-middle\"><i class=\"material-icons\">phone</i> {{ user.phone }}</p>\n        <p *ngIf=\"user.email\" class=\"grid-noGutter-middle\"><i class=\"material-icons\">mail_outline</i> {{ user.email }}</p>\n        <p *ngIf=\"user.city || user.country\" class=\"grid-noGutter-middle\"><i class=\"material-icons\">location_on</i> {{ user.city }} {{ ', ' + user.country }}</p>\n      </div>\n\n      <div *ngIf=\"user.bornDate || user.gender\" class=\"Profile__info__box Profile__info__box--basic-info\">\n        <h4>Información basica</h4>\n        <p *ngIf=\"user.bornDate\">Fecha de nacimiento: {{ user.bornDate | amDateFormat:'DD MMM YYYY' }}</p>\n        <p *ngIf=\"genders[user.gender]\">Sexo: {{ genders[user.gender] }}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"Profile__container panel-container col-7_xs-12_sm-12\">\n    <app-good-job-loader [show]=\"isLoading$ | async\" [overlay]=\"true\"></app-good-job-loader>\n\n    <form class=\"grid-top-equalHeight mt-20 form\" [formGroup]=\"profileFormGroup\" (ngSubmit)=\"onUpdateProfile()\">\n      <div class=\"container-element container-element--field col-6\" data-field=\"name\">\n        <mat-form-field>\n          <input matInput placeholder=\"Nombres\" formControlName=\"name\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--field col-6\" data-field=\"lastname\">\n        <mat-form-field>\n          <input matInput placeholder=\"Apellidos\" formControlName=\"lastname\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--field col-12\" data-field=\"username\">\n        <mat-form-field>\n          <input matInput placeholder=\"Usuario\" formControlName=\"username\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--field col-12\" data-field=\"email\">\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--field col-6\" data-field=\"country\">\n        <mat-form-field>\n          <mat-select placeholder=\"Pais\" formControlName=\"country\" (change)=\"getCitiesByCountry()\">\n            <mat-option *ngFor=\"let country of countries\" [value]=\"country.country\">\n              {{ country.country }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--field col-6\" data-field=\"city\">\n        <mat-form-field>\n          <mat-select placeholder=\"Ciudad\" formControlName=\"city\">\n            <mat-option *ngFor=\"let city of cities\" [value]=\"city.name\">\n              {{ city.name }}\n            </mat-option>\n          </mat-select>\n\n          <mat-error *ngIf=\"user.country === ' '\">\n            Debe seleccionar un pais\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--field col-12\" data-field=\"phone\">\n        <mat-form-field>\n          <input matInput placeholder=\"Telefono\" formControlName=\"phone\">\n        </mat-form-field>\n      </div>\n\n      <hr *ngIf=\"user.role !== 'Admin'\" class=\"mb-30\">\n      <h2 *ngIf=\"user.role !== 'Admin'\" class=\"col-12\">Empresa</h2>\n\n      <div *ngIf=\"user.role !== 'Admin'\" class=\"container-element container-element--field col-12\" data-field=\"company_name\">\n        <mat-form-field>\n          <input matInput placeholder=\"Empresa\" formControlName=\"company_name\">\n        </mat-form-field>\n      </div>\n\n      <div *ngIf=\"user.role !== 'Admin'\" class=\"container-element container-element--field col-12\" data-field=\"about\">\n        <mat-form-field>\n          <textarea matInput placeholder=\"Razon social\" formControlName=\"about\" row=\"400\"></textarea>\n        </mat-form-field>\n      </div>\n\n      <div class=\"container-element container-element--button align-right col-12\">\n        <button type=\"submit\" class=\"button\" mat-raised-button color=\"primary\">Guardar</button>\n      </div>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/profile/components/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.Profile__info {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n  .Profile__info__box {\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid #EDEDED; }\n    .Profile__info__box:last-child {\n      margin-bottom: 0;\n      padding-bottom: 0;\n      border-bottom: none; }\n    .Profile__info__box h4 {\n      color: #8F949F;\n      font-family: \"OpenSans-Regular\";\n      font-size: 16px;\n      line-height: 22px;\n      color: #8E959F; }\n    .Profile__info__box--avatar .avatar {\n      position: relative;\n      width: 165px;\n      height: 180px;\n      margin-right: auto;\n      margin-left: auto;\n      padding: 5px;\n      border-radius: 50%;\n      border: 2px solid #6E8ABA; }\n      .Profile__info__box--avatar .avatar.is-empty {\n        height: 165px; }\n      .Profile__info__box--avatar .avatar img {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%; }\n      .Profile__info__box--avatar .avatar i {\n        font-size: 165px; }\n      .Profile__info__box--avatar .avatar .drop-zone {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0; }\n        .Profile__info__box--avatar .avatar .drop-zone.is-dropped {\n          background-color: rgba(255, 255, 255, 0.7);\n          opacity: 1; }\n        .Profile__info__box--avatar .avatar .drop-zone__data {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          overflow: hidden; }\n          .Profile__info__box--avatar .avatar .drop-zone__data .mat-progress-spinner {\n            position: absolute;\n            top: 0;\n            left: 0; }\n            .Profile__info__box--avatar .avatar .drop-zone__data .mat-progress-spinner circle {\n              stroke: #6E8ABA; }\n          .Profile__info__box--avatar .avatar .drop-zone__data .data-namefile, .Profile__info__box--avatar .avatar .drop-zone__data .data-sizefile {\n            color: #8F949F;\n            font-family: \"OpenSans-Regular\";\n            font-size: 16px;\n            line-height: 22px;\n            display: block;\n            margin-bottom: 10px; }\n          .Profile__info__box--avatar .avatar .drop-zone__data .data-actions button {\n            margin-right: 10px; }\n            .Profile__info__box--avatar .avatar .drop-zone__data .data-actions button:last-child {\n              margin-right: 0; }\n            .Profile__info__box--avatar .avatar .drop-zone__data .data-actions button[data-action=\"upload\"] {\n              background-color: #1E50D8; }\n            .Profile__info__box--avatar .avatar .drop-zone__data .data-actions button[data-action=\"cancel\"] {\n              background-color: #FFA82A; }\n            .Profile__info__box--avatar .avatar .drop-zone__data .data-actions button[data-action=\"remove\"] {\n              background-color: #FF3600; }\n            .Profile__info__box--avatar .avatar .drop-zone__data .data-actions button[disabled] {\n              opacity: 0.75; }\n      .Profile__info__box--avatar .avatar .input-file-wrapper {\n        position: absolute;\n        right: -10px;\n        bottom: 15px;\n        width: 45px;\n        height: 45px;\n        border-radius: 50%;\n        background-color: #FFF;\n        cursor: pointer; }\n        .Profile__info__box--avatar .avatar .input-file-wrapper i {\n          color: #6E8ABA;\n          font-size: 45px; }\n        .Profile__info__box--avatar .avatar .input-file-wrapper input {\n          width: 0;\n          pointer-events: none;\n          visibility: hidden; }\n    .Profile__info__box--avatar .detail {\n      text-align: center; }\n      .Profile__info__box--avatar .detail h1 {\n        margin-bottom: 10px;\n        color: #000000; }\n      .Profile__info__box--avatar .detail p {\n        margin-bottom: 0; }\n    .Profile__info__box--contact-info p, .Profile__info__box--basic-info p {\n      margin-bottom: 10px;\n      color: #000000; }\n      .Profile__info__box--contact-info p:last-child, .Profile__info__box--basic-info p:last-child {\n        margin-bottom: 0; }\n    .Profile__info__box--contact-info i {\n      margin-right: 10px;\n      color: #6E8ABA; }\n\n.Profile__container {\n  position: relative; }\n  .Profile__container .Cashback__element {\n    margin-right: 10px;\n    margin-left: 10px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: calc(50% - 95px); }\n    .Profile__container .Cashback__element__content {\n      position: relative;\n      padding-left: 50px;\n      text-align: center; }\n      .Profile__container .Cashback__element__content i {\n        position: absolute;\n        left: 0;\n        top: 5px;\n        color: #6E8ABA;\n        font-size: 45px; }\n      .Profile__container .Cashback__element__content p {\n        color: #000000; }\n        .Profile__container .Cashback__element__content p span {\n          display: block;\n          margin-top: 5px;\n          color: #6E8ABA;\n          font-size: 30px;\n          font-family: \"MerriweatherSans-ExtraBold\";\n          text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/profile/components/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_services__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_store__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = (function () {
    function ProfileComponent(_formBuilder, _service, _utils, _store) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this._service = _service;
        this._utils = _utils;
        this._store = _store;
        this.uploaderOptions = {};
        this.hasBaseDropZoneOver = false;
        this.upFileProgressBarMode = 'determinate';
        this.upFileProgressBarState = 'primary';
        this.isLoading$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_7__profile_store__["f" /* getLoading */]));
        this.genders = [
            'Hombre',
            'Mujer'
        ];
        this.getCountries();
        this.user = this._service.getUserLogged();
        this.avatarpath = this._service.getUserAvatar(this.user.image);
        this.profileFormGroup = this._formBuilder.group({
            _id: [this.user._id, ''],
            image: [this.user.image, ''],
            username: [this.user.username, ''],
            name: [this.user.name, ''],
            lastname: [this.user.lastname, ''],
            email: [{ value: this.user.email, disabled: true }, ''],
            phone: [this.user.phone, ''],
            country: [this.user.country, ''],
            city: [this.user.city, ''],
            company: [this.user.company, ''],
            company_name: [{ value: this.user.company_name, disabled: this.user.role === 'Sucursal' ? true : false }, ''],
            about: [{ value: this.user.about, disabled: this.user.role === 'Sucursal' ? true : false }, ''],
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + "user/upload-image/" + this.user._id,
            authToken: this._service.getToken(),
            authTokenHeader: 'auth',
            disableMultipart: false
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.response.subscribe(function (resp) {
            var response = JSON.parse(resp);
            _this.profileFormGroup.patchValue({ image: response.image });
            _this.onUpdateProfile();
        });
        this.user$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_7__profile_store__["i" /* getUser */]));
        this.user$.subscribe(function (user) {
            _this.user = _this._service.getUserLogged();
            _this.avatarpath = _this._service.getUserAvatar(_this.user.image);
        });
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.getCountries = function () {
        var _this = this;
        this._utils.getCountries().subscribe(function (response) {
            _this.countries = response.countries;
            _this.cities = [];
            if (_this.user.country !== '') {
                _this.getCitiesByCountry(_this.user.country);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.getCitiesByCountry = function (country) {
        var _this = this;
        country = typeof country === 'undefined' ? this.profileFormGroup.value.country : country;
        this._utils.getCitiesOfCountry(country).subscribe(function (response) {
            _this.cities = response.cities;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.fileDropped = function (event) {
        this.hasBaseDropZoneOver = event;
    };
    ProfileComponent.prototype.onUpdateProfile = function () {
        if (this.profileFormGroup.valid) {
            this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__profile_store__["e" /* UserUpdating */](this.profileFormGroup.value));
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-profile',
            template: __webpack_require__("../../../../../src/app/dashboard/modules/profile/components/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/modules/profile/components/profile.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__profile_services__["a" /* ProfileService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__profile_services__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/modules/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components__["a" /* ProfileComponent */], pathMatch: 'full' }
];
var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_7__components__["b" /* components */].slice(),
            providers: __WEBPACK_IMPORTED_MODULE_8__services__["b" /* services */].slice(),
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map
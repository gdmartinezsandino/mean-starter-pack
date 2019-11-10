webpackJsonp(["settings.module"],{

/***/ "../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mt-30 grid-top\">\n  <div class=\"col-expand\">\n    <mat-form-field>\n      <input matInput placeholder=\"Buscar\" (keyup)=\"applyFilterDevices($event.target.value)\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-shrink\">\n    <button class=\"button\" type=\"button\" (click)=\"addDevice()\" mat-raised-button color=\"primary\">Añadir dispositivo</button>\n  </div>\n</form>\n\n<mat-table class=\"mat-elevation-z6 mt-20\" #table matSort [dataSource]=\"tableSourceDevices\" matSortActive=\"last_update\" matSortDirection=\"desc\" matSortDisableClear>\n  <ng-container matColumnDef=\"id_emmiter\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.id_emmiter }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"imei\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>IMEI</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.imei }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"model\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Modelo</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.model }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"version\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Version</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.version }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"nsimcard\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>SIM Card</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.nsimcard }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"battery\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Bateria</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.battery }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"created_at\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Creado en</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.created_at | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"last_update\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Ult. Modificación</mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">{{ device.last_update | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let device\">\n      <button (click)=\"viewDetail(device)\" mat-icon-button>\n        <mat-icon aria-label=\"Ver detalle\">visibility</mat-icon>\n      </button>\n\n      <button (click)=\"editDevice(device)\" mat-icon-button>\n        <mat-icon aria-label=\"Editar\">edit</mat-icon>\n      </button>\n\n      <button (click)=\"deleteDevice(device)\" mat-icon-button>\n        <mat-icon aria-label=\"Eliminar\">delete</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"columnsTableDevicesToShow\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: columnsTableDevicesToShow;\"></mat-row>\n</mat-table>\n\n<mat-paginator class=\"of-theme\" #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_services_profile_service__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DevicesComponent = (function () {
    function DevicesComponent(_profileService, _store, _formBuilder, _utils) {
        var _this = this;
        this._profileService = _profileService;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._utils = _utils;
        this.userLogged = this._profileService.getUserLogged();
        this.isLoading$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_8__store__["t" /* getLoading */]));
        this.devices$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_8__store__["s" /* getDevices */]));
        this.devices$.subscribe(function (devices) {
            if (typeof devices === 'undefined') {
                return false;
            }
            _this.devices = devices;
            _this.tableSourceDevices = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](_this.devices);
            _this.tableSourceDevices.sort = _this.dataListDevices;
            _this.tableSourceDevices.paginator = _this.paginatorDevices;
            _this.columnsTableDevicesToShow = [
                'id_emmiter', 'imei',
                'battery', 'model',
                'version', 'nsimcard',
                'created_at', 'last_update', 'actions'
            ];
        });
        this.deviceForm = this.getEmptyForm();
    }
    DevicesComponent.prototype.getEmptyForm = function () {
        return this._formBuilder.group({
            _id: ['', ''],
            id_emmiter: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            imei: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            battery: ['', ''],
            model: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            version: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            nsimcard: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    };
    DevicesComponent.prototype.generateModalForm = function (action) {
        var _this = this;
        return this._utils.showDialog({
            width: 600,
            data: {
                title: action === 'save' ? 'Crear dispositivo' : 'Editar dispositivo',
                confirm: true,
                model: this.deviceForm.value,
                formElement: this.deviceForm,
                form: [
                    {
                        name: 'id_emmiter',
                        type: 'text',
                        placeholder: 'ID',
                        required: true,
                        errorMessage: 'Debe ingresar el ID del dispositivo'
                    },
                    {
                        name: 'imei',
                        type: 'text',
                        placeholder: 'Imei',
                        required: true,
                        errorMessage: 'Debe ingresar el imer del dispositivo'
                    },
                    { name: 'battery', type: 'text', placeholder: 'Nivel de bateria' },
                    {
                        name: 'model',
                        type: 'text',
                        placeholder: 'Modelo',
                        required: true,
                        errorMessage: 'Debe ingresar el modelo del dispositivo'
                    },
                    {
                        name: 'version',
                        type: 'text',
                        placeholder: 'Version',
                        required: true,
                        errorMessage: 'Debe ingresar la version del dispositivo'
                    },
                    {
                        name: 'nsimcard',
                        type: 'text',
                        placeholder: 'Número simcard',
                        required: true,
                        errorMessage: 'Debe ingresar el numero simcard del dispositivo'
                    },
                ],
                onChange: function (model) {
                    _this.deviceForm.patchValue(model);
                },
            },
            onClose: function (result) {
                if (typeof result === 'undefined') {
                    return false;
                }
                if (result.action && _this.deviceForm.valid) {
                    if (action === 'save') {
                        _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["a" /* AddingDevice */](_this.deviceForm.value));
                    }
                    else {
                        _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["p" /* UpdatingDevice */](_this.deviceForm.value));
                    }
                }
            }
        });
    };
    DevicesComponent.prototype.getDevices = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["j" /* GetDevices */]());
    };
    DevicesComponent.prototype.applyFilterDevices = function (filterValue) {
        this.tableSourceDevices.filter = filterValue.trim().toLowerCase();
    };
    DevicesComponent.prototype.addDevice = function () {
        this.deviceForm = this.getEmptyForm();
        this.generateModalForm('save');
    };
    DevicesComponent.prototype.editDevice = function (device) {
        var deviceToEdit = Object.assign({}, device);
        this.deviceForm.patchValue(deviceToEdit);
        this.generateModalForm('edit');
    };
    DevicesComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        if (device.state === 'ASSIGNED') {
            this._utils.showDialog({
                width: 300,
                data: {
                    title: 'Atención',
                    message: 'Este dispositivo no puede ser eliminado porque ya ha sido asignado.',
                },
            });
        }
        else {
            this._utils.showDialog({
                width: 300,
                data: {
                    title: 'Eliminar dispositivo',
                    message: '¿Esta seguro que desea eliminar este dispositivo?',
                    confirm: true,
                },
                onClose: function (result) {
                    if (result.action) {
                        _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["g" /* DeletingDevice */](device));
                    }
                }
            });
        }
    };
    DevicesComponent.prototype.viewDetail = function (device) {
        this._utils.showDialog({
            width: 600,
            data: {
                title: 'Ver detalle',
                template: "\n          <div class=\"align-center\">\n            <h1>ID: " + device.id_emmiter + "</h1>\n            <p><strong>Imei:</strong> " + device.imei + "</p>\n            <p><strong>SimCard:</strong> " + device.nsimcard + "</p>\n            <p><strong>Modelo:</strong> " + device.model + "</p>\n            <p><strong>Bateria:</strong> " + device.battery + "</p>\n            <p><strong>Version:</strong> " + device.version + "</p>\n            <p><strong>Creado en:</strong> " + __WEBPACK_IMPORTED_MODULE_4_moment__(Number(device.create_at)).format('DD MMM, YYYY') + "</p>\n          </div>\n        ",
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], DevicesComponent.prototype, "dataListDevices", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */])
    ], DevicesComponent.prototype, "paginatorDevices", void 0);
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-devices',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* SettingsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__profile_services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* UtilsService */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devices_devices_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_questions_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payments_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/settings.component.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__settings_component__["a"]; });




var components = [
    __WEBPACK_IMPORTED_MODULE_0__devices_devices_component__["a" /* DevicesComponent */],
    __WEBPACK_IMPORTED_MODULE_1__questions_questions_component__["a" /* QuestionsComponent */],
    __WEBPACK_IMPORTED_MODULE_2__payments_payments_component__["a" /* PaymentsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__settings_component__["a" /* SettingsComponent */],
];






/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mt-30 grid-top\">\n  <div class=\"col-expand\">\n    <mat-form-field>\n      <input matInput placeholder=\"Buscar\" (keyup)=\"applyFilterPayments($event.target.value)\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-shrink\">\n    <button class=\"button\" type=\"button\" (click)=\"addPayment()\" mat-raised-button color=\"primary\">Añadir factura</button>\n    <button class=\"button ml-10\" type=\"button\" (click)=\"exportCSV()\" mat-raised-button color=\"primary\">Exportar CSV</button>\n  </div>\n</form>\n\n<mat-table class=\"mat-elevation-z6 mt-20\" #table matSort [dataSource]=\"tableSourcePayments\" matSortActive=\"last_update\" matSortDirection=\"desc\" matSortDisableClear>\n  <ng-container matColumnDef=\"company\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Empresa</mat-header-cell>\n    <mat-cell *matCellDef=\"let payment\">{{ payment.company.company_name }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"amount\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Valor</mat-header-cell>\n    <mat-cell *matCellDef=\"let payment\">{{ payment.amount }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"state\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Estado</mat-header-cell>\n    <mat-cell *matCellDef=\"let payment\">{{ payment.state }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"created_at\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Creado en</mat-header-cell>\n    <mat-cell *matCellDef=\"let payment\">{{ payment.created_at | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"last_update\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Ult. Modificación</mat-header-cell>\n    <mat-cell *matCellDef=\"let payment\">{{ payment.last_update | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let payment\">\n      <button (click)=\"viewDetail(payment)\" mat-icon-button>\n        <mat-icon aria-label=\"Ver detalle\">visibility</mat-icon>\n      </button>\n\n      <button (click)=\"editPayment(payment)\" mat-icon-button>\n        <mat-icon aria-label=\"Editar\">edit</mat-icon>\n      </button>\n\n      <button (click)=\"deletePayment(payment)\" mat-icon-button>\n        <mat-icon aria-label=\"Eliminar\">delete</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"columnsTablePaymentsToShow\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: columnsTablePaymentsToShow;\"></mat-row>\n</mat-table>\n\n<mat-paginator class=\"of-theme\" #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv__ = __webpack_require__("../../../../angular5-csv/Angular5-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_services_profile_service__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PaymentsComponent = (function () {
    function PaymentsComponent(_profileService, _store, _formBuilder, _utils) {
        var _this = this;
        this._profileService = _profileService;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._utils = _utils;
        this.userLogged = this._profileService.getUserLogged();
        this.isLoading$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_9__store__["t" /* getLoading */]));
        this.payments$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_9__store__["u" /* getPayments */]));
        this.payments$.subscribe(function (payments) {
            if (typeof payments === 'undefined') {
                return false;
            }
            _this.payments = payments;
            _this.tableSourcePayments = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](_this.payments);
            _this.tableSourcePayments.connect().subscribe(function (dataToExport) {
                _this.renderedDataOfTable = dataToExport.map(function (payment) {
                    return {
                        company: !payment.company.company_name ? '' : payment.company.company_name,
                        created_at: !payment.created_at ? '' : payment.company.created_at,
                        description: !payment.description ? '' : payment.company.description,
                        amount: !payment.amount ? '' : payment.company.amount,
                        last_update: !payment.last_update ? '' : payment.company.last_update,
                        state: !payment.state ? '' : payment.company.state
                    };
                });
            });
            _this.tableSourcePayments.sort = _this.dataListPayments;
            _this.tableSourcePayments.paginator = _this.paginatorPayments;
            _this.columnsTablePaymentsToShow = ['company', 'amount', 'state', 'created_at', 'last_update', 'actions'];
        });
        this.paymentForm = this.getEmptyForm();
    }
    PaymentsComponent.prototype.ngOnInit = function () { };
    PaymentsComponent.prototype.getEmptyForm = function () {
        return this._formBuilder.group({
            _id: ['', ''],
            company: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            amount: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            number: ['', ''],
            state: ['Pendiente', ''],
        });
    };
    PaymentsComponent.prototype.generateModalForm = function (action) {
        var _this = this;
        if (action !== 'save') {
            this.paymentForm.patchValue({
                company: this.paymentForm.value.company._id,
            });
        }
        return this._utils.showDialog({
            width: 600,
            data: {
                title: action === 'save' ? 'Crear Factura' : 'Editar Factura',
                confirm: true,
                model: this.paymentForm.value,
                formElement: this.paymentForm,
                form: [
                    {
                        name: 'company',
                        type: 'select',
                        options: this.companies.map(function (company) {
                            return {
                                value: company._id, text: "" + company.company_name
                            };
                        }),
                        placeholder: 'Empresa',
                        required: true,
                        errorMessage: 'Debe seleccionar una empresa'
                    },
                    { name: 'number', type: 'text', placeholder: 'Número de Factura' },
                    { name: 'amount', type: 'text', placeholder: 'Valor' },
                    { name: 'description', type: 'textarea', placeholder: 'Descripción' },
                    {
                        name: 'state',
                        type: 'select',
                        options: [
                            { value: 'Pendiente', text: 'Pendiente' },
                            { value: 'Pagada', text: 'Pagada' },
                        ],
                        placeholder: 'Estado',
                    },
                ],
                onChange: function (model) {
                    _this.paymentForm.patchValue(model);
                },
            },
            onClose: function (result) {
                if (typeof result === 'undefined') {
                    return false;
                }
                if (result.action && _this.paymentForm.valid) {
                    if (action === 'save') {
                        _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store__["b" /* AddingPayment */](_this.paymentForm.value));
                    }
                    else {
                        _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store__["q" /* UpdatingPayment */](_this.paymentForm.value));
                    }
                }
            }
        });
    };
    PaymentsComponent.prototype.getCompanies = function () {
        var _this = this;
        this._profileService.getUserByRole('Empresa').subscribe(function (response) {
            _this.companies = response.users ? response.users : [];
        }, function (error) {
            console.log(error);
        });
    };
    PaymentsComponent.prototype.getPayments = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store__["k" /* GetPayments */]());
    };
    PaymentsComponent.prototype.applyFilterPayments = function (filterValue) {
        this.tableSourcePayments.filter = filterValue.trim().toLowerCase();
    };
    PaymentsComponent.prototype.addPayment = function () {
        this.paymentForm = this.getEmptyForm();
        this.generateModalForm('save');
    };
    PaymentsComponent.prototype.editPayment = function (payment) {
        var paymentToEdit = Object.assign({}, payment);
        this.paymentForm.patchValue(paymentToEdit);
        this.generateModalForm('edit');
    };
    PaymentsComponent.prototype.deletePayment = function (payment) {
        var _this = this;
        this._utils.showDialog({
            width: 300,
            data: {
                title: 'Eliminar pago',
                message: '¿Esta seguro que desea eliminar este pago?',
                confirm: true,
            },
            onClose: function (result) {
                if (result.action) {
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__store__["h" /* DeletingPayment */](payment));
                }
            }
        });
    };
    PaymentsComponent.prototype.viewDetail = function (payment) {
        this._utils.showDialog({
            width: 600,
            data: {
                title: 'Ver detalle',
                template: "\n          <div class=\"align-center\">\n            <h1>Empresa: " + payment.company.company_name + "</h1>\n            <p><strong>Descripci\u00F3n:</strong> " + payment.description + "</p>\n            <p><strong>Valor:</strong> " + payment.amount + "</p>\n            <p><strong>state:</strong> " + payment.state + "</p>\n            <p><strong>Creado en:</strong> " + __WEBPACK_IMPORTED_MODULE_5_moment__(Number(payment.create_at)).format('DD MMM, YYYY') + "</p>\n            <p><strong>Ultima modificaci\u00F3n:</strong> " + __WEBPACK_IMPORTED_MODULE_5_moment__(Number(payment.last_update)).format('DD MMM, YYYY') + "</p>\n          </div>\n        ",
            }
        });
    };
    PaymentsComponent.prototype.exportCSV = function () {
        var options = {
            headers: ['Empresa', 'Fecha creación', 'Descripción', 'Valor', 'Ultima Modificación', 'Estado']
        };
        console.log(this.renderedDataOfTable);
        return new __WEBPACK_IMPORTED_MODULE_3_angular5_csv_Angular5_csv__["Angular5Csv"](this.renderedDataOfTable, 'Reporte Facturacion', options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], PaymentsComponent.prototype, "dataListPayments", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */])
    ], PaymentsComponent.prototype, "paginatorPayments", void 0);
    PaymentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-payments',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services__["a" /* SettingsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__profile_services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__shared_services__["b" /* UtilsService */]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mt-30 grid-top\">\n  <div class=\"col-expand\">\n    <mat-form-field>\n      <input matInput placeholder=\"Buscar\" (keyup)=\"applyFilterQuestions($event.target.value)\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"col-shrink\">\n    <button class=\"button\" type=\"button\" (click)=\"addQuestion()\" mat-raised-button color=\"primary\">Añadir pregunta</button>\n  </div>\n</form>\n\n<mat-table class=\"mat-elevation-z6 mt-20\" #table matSort [dataSource]=\"tableSourceQuestions\" matSortActive=\"last_update\" matSortDirection=\"desc\" matSortDisableClear>\n  <ng-container matColumnDef=\"title\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Titulo</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.title }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"category\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Categoría</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.category }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"company\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Empresa</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.company.company_name }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"sucursal\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Sucursal</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.sucursal.name }} {{ question.sucursal.lastname }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Puesto</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.position }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"device\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Dispositivo</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.device.imei }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"state\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Estado</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.state }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"created_at\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Creado en</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.created_at | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"last_update\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Ult. Modificación</mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">{{ question.last_update | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let question\">\n      <button (click)=\"viewDetail(question)\" mat-icon-button>\n        <mat-icon aria-label=\"Ver detalle\">visibility</mat-icon>\n      </button>\n\n      <button (click)=\"editQuestion(question)\" mat-icon-button>\n        <mat-icon aria-label=\"Editar\">edit</mat-icon>\n      </button>\n\n      <button (click)=\"deleteQuestion(question)\" mat-icon-button>\n        <mat-icon aria-label=\"Eliminar\">delete</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"columnsTableQuestionsToShow\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: columnsTableQuestionsToShow;\"></mat-row>\n</mat-table>\n\n<mat-paginator class=\"of-theme\" #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_services_profile_service__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuestionsComponent = (function () {
    function QuestionsComponent(_service, _profileService, _store, _formBuilder, _utils) {
        var _this = this;
        this._service = _service;
        this._profileService = _profileService;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._utils = _utils;
        this.userLogged = this._profileService.getUserLogged();
        this.isLoading$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_8__store__["t" /* getLoading */]));
        this.questions$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_8__store__["v" /* getQuestions */]));
        this.questions$.subscribe(function (questions) {
            if (typeof questions === 'undefined') {
                return false;
            }
            _this.questions = questions;
            _this.tableSourceQuestions = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](_this.questions);
            _this.tableSourceQuestions.sort = _this.dataListQuestions;
            _this.tableSourceQuestions.paginator = _this.paginatorQuestions;
            _this.columnsTableQuestionsToShow = [
                'title', 'category', 'company', 'sucursal',
                'position', 'device', 'state', 'created_at',
                'last_update', 'actions'
            ];
        });
        this.questionForm = this.getEmptyForm();
    }
    QuestionsComponent.prototype.ngOnInit = function () { };
    QuestionsComponent.prototype.getEmptyForm = function () {
        return this._formBuilder.group({
            _id: ['', ''],
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            company: [this.userLogged.role === 'Empresa' ? this.userLogged._id : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            sucursal: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            device: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            position: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            state: ['ACTIVE', ''],
        });
    };
    QuestionsComponent.prototype.generateModalForm = function (action) {
        var _this = this;
        if (action !== 'save') {
            this.questionForm.patchValue({
                company: this.questionForm.value.company._id,
                sucursal: this.questionForm.value.sucursal._id,
                device: this.questionForm.value.device._id,
            });
        }
        return this._utils.showDialog({
            width: 600,
            data: {
                title: action === 'save' ? 'Crear pregunta' : 'Editar pregunta',
                confirm: true,
                model: this.questionForm.value,
                formElement: this.questionForm,
                form: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Titulo',
                        required: true,
                        errorMessage: 'Debe ingresar un titulo'
                    },
                    {
                        name: 'category',
                        type: 'select',
                        options: [
                            { value: 'Servicios', text: 'Servicios' },
                            { value: 'Restaurante', text: 'Restaurante' },
                            { value: 'Salud', text: 'Salud' },
                            { value: 'Satisfacción', text: 'Satisfacción' },
                            { value: 'Transporte', text: 'Transporte' },
                            { value: 'Spa', text: 'Spa' },
                            { value: 'Hotel', text: 'Hotel' },
                            { value: 'Baños', text: 'Baños' },
                            { value: 'Empleados', text: 'Empleados' },
                            { value: 'Retail', text: 'Retail' },
                        ],
                        placeholder: 'Categoría',
                        required: true,
                        errorMessage: 'Debe seleccionar una categoría'
                    },
                    {
                        name: 'device',
                        type: 'select',
                        options: this.devices.map(function (device) {
                            return {
                                value: device._id, text: "" + device.imei
                            };
                        }),
                        placeholder: 'Dispositivo',
                        required: true,
                        errorMessage: 'Debe seleccionar un dispositivo'
                    },
                    {
                        name: 'company',
                        type: 'select',
                        options: this.companies.map(function (company) {
                            return {
                                value: company._id, text: "" + company.company_name
                            };
                        }),
                        show: this.userLogged.role === 'Empresa' ? false : true,
                        placeholder: 'Empresa',
                        required: true,
                        errorMessage: 'Debe seleccionar una empresa'
                    },
                    {
                        name: 'sucursal',
                        type: 'select',
                        options: this.sucursales.map(function (sucursal) {
                            return {
                                value: sucursal._id, text: sucursal.name + " " + sucursal.lastname
                            };
                        }),
                        placeholder: 'Sucursal',
                        required: true,
                        errorMessage: 'Debe seleccionar una sucursal'
                    },
                    {
                        name: 'position',
                        type: 'text',
                        placeholder: 'Puesto',
                        required: true,
                        errorMessage: 'Debe ingresar el puesto'
                    },
                ],
                actions: [
                    {
                        callback: 'changeStateQuestion', placeholder: 'Activar/desactivar pregunta'
                    }
                ],
                changeStateQuestion: function (questionToUpdate) {
                    questionToUpdate = Object.assign({}, questionToUpdate);
                    questionToUpdate.state = questionToUpdate.state === 'ACTIVE' ? 'DESACTIVE' : 'ACTIVE';
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["f" /* ChangingStateQuestion */](questionToUpdate));
                    var deviceSelected = _this.devices.filter(function (device) {
                        return device._id === _this.questionForm.value.device;
                    })[0];
                    deviceSelected = Object.assign({}, deviceSelected);
                    deviceSelected.state = questionToUpdate.state === 'ACTIVE' ? 'ASSIGNED' : 'NO-ASSIGNED';
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["e" /* ChangingStateDevice */](deviceSelected));
                    var message = questionToUpdate.state === 'ACTIVE' ? 'La pregunta ha sido activada' : 'La pregunta ha sido desactivada';
                    _this._utils.showDialog({
                        width: 300,
                        data: {
                            title: 'Atención',
                            message: message,
                        },
                        onClose: function (result) {
                            _this.questionForm.patchValue(questionToUpdate);
                        }
                    });
                },
                onChange: function (model) {
                    _this.questionForm.patchValue(model);
                },
            },
            onClose: function (result) {
                if (typeof result === 'undefined') {
                    return false;
                }
                if (result.action && _this.questionForm.valid) {
                    if (action === 'save') {
                        var deviceSelected = _this.devices.filter(function (device) {
                            return device._id === _this.questionForm.value.device;
                        })[0];
                        if (deviceSelected.state === 'ASSIGNED') {
                            _this.checkAvailabityOfDevice(deviceSelected);
                        }
                        else {
                            deviceSelected = Object.assign({}, deviceSelected);
                            deviceSelected.state = 'ASSIGNED';
                            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["e" /* ChangingStateDevice */](deviceSelected));
                            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["c" /* AddingQuestion */](_this.questionForm.value));
                        }
                    }
                    else {
                        _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["r" /* UpdatingQuestion */](_this.questionForm.value));
                    }
                }
            }
        });
    };
    QuestionsComponent.prototype.getDevices = function () {
        var _this = this;
        this._service.getDevices().subscribe(function (response) {
            _this.devices = response.devices ? response.devices : [];
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsComponent.prototype.getCompanies = function () {
        var _this = this;
        this._profileService.getUserByRole('Empresa').subscribe(function (response) {
            _this.companies = response.users ? response.users : [];
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsComponent.prototype.getSucursales = function (company) {
        var _this = this;
        if (company) {
            this._profileService.getSucursales(company).subscribe(function (response1) {
                _this.sucursales = response1.users ? response1.users : [];
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._profileService.getUserByRole('Sucursal').subscribe(function (response1) {
                _this.sucursales = response1.users ? response1.users : [];
            }, function (error) {
                console.log(error);
            });
        }
    };
    QuestionsComponent.prototype.checkAvailabityOfDevice = function (device) {
        var _this = this;
        this._utils.showDialog({
            width: 300,
            data: {
                title: 'Atención',
                message: 'Este dispositivo ya esta asignado a una pregunta. ¿Desea asignarlo a esta nueva pregunta?',
                confirm: true,
            },
            onClose: function (result) {
                if (typeof result === 'undefined') {
                    return false;
                }
                if (result.action) {
                    var questionToDesactivate = _this.questions.filter(function (question) {
                        return question.device._id === device._id && question.state === 'ACTIVE';
                    })[0];
                    questionToDesactivate = Object.assign({}, questionToDesactivate);
                    questionToDesactivate.state = 'INACTIVE';
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["f" /* ChangingStateQuestion */](questionToDesactivate));
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["c" /* AddingQuestion */](_this.questionForm.value));
                }
            }
        });
    };
    QuestionsComponent.prototype.getQuestions = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["l" /* GetQuestions */]());
    };
    QuestionsComponent.prototype.applyFilterQuestions = function (filterValue) {
        this.tableSourceQuestions.filter = filterValue.trim().toLowerCase();
    };
    QuestionsComponent.prototype.addQuestion = function () {
        this.questionForm = this.getEmptyForm();
        this.generateModalForm('save');
    };
    QuestionsComponent.prototype.editQuestion = function (question) {
        var questionToEdit = Object.assign({}, question);
        this.questionForm.patchValue(questionToEdit);
        this.generateModalForm('edit');
    };
    QuestionsComponent.prototype.deleteQuestion = function (question) {
        var _this = this;
        this._utils.showDialog({
            width: 300,
            data: {
                title: 'Eliminar dispositivo',
                message: '¿Esta seguro que desea eliminar esta pregunta?',
                confirm: true,
            },
            onClose: function (result) {
                if (result.action) {
                    var deviceAssigned = _this.devices.filter(function (device) {
                        return device._id === question.device._id;
                    })[0];
                    deviceAssigned.state = 'NO-ASSIGNED';
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["e" /* ChangingStateDevice */](deviceAssigned));
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__store__["i" /* DeletingQuestion */](question));
                }
            }
        });
    };
    QuestionsComponent.prototype.viewDetail = function (question) {
        this._utils.showDialog({
            width: 600,
            data: {
                title: 'Ver detalle',
                template: "\n          <div class=\"align-center\">\n            <h1>Title: " + question.title + "</h1>\n            <p><strong>Categoria:</strong> " + question.category + "</p>\n            <p><strong>Empresa:</strong> " + question.company.company_name + "</p>\n            <p><strong>Sucursal:</strong> " + question.sucursal.company_name + "</p>\n            <p><strong>Dispositivo:</strong> " + question.device.imei + "</p>\n            <p><strong>Estado:</strong> " + question.state + "</p>\n            <p><strong>Creado en:</strong> " + __WEBPACK_IMPORTED_MODULE_4_moment__(Number(question.created_at)).format('DD MMM, YYYY') + "</p>\n            <p><strong>Ultima modificaci\u00F3n:</strong> " + __WEBPACK_IMPORTED_MODULE_4_moment__(Number(question.last_update)).format('DD MMM, YYYY') + "</p>\n          </div>\n        ",
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], QuestionsComponent.prototype, "dataListQuestions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */])
    ], QuestionsComponent.prototype, "paginatorQuestions", void 0);
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-questions',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* SettingsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_6__profile_services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* UtilsService */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"Settings grid\">\n  <header class=\"Profile__header panel-header col-12 mb-20\">\n    <h1>Configuración</h1>\n  </header>\n\n  <div class=\"Settings__container panel-container col-12\" dynamicHeight mat-stretch-tabs>\n    <app-good-job-loader [show]=\"isLoading$ | async\" [overlay]=\"true\"></app-good-job-loader>\n\n    <mat-tab-group (selectedTabChange)=\"onChangeTab($event)\">\n      <mat-tab label=\"Usuarios\">\n        <form class=\"mt-30 grid-top\">\n          <div class=\"col-expand\">\n            <mat-form-field>\n              <input matInput placeholder=\"Buscar\" (keyup)=\"applyFilterUsers($event.target.value)\">\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-shrink\">\n            <button class=\"button\" type=\"button\" (click)=\"registerUser()\" mat-raised-button color=\"primary\">Registrar Usuario</button>\n          </div>\n        </form>\n\n        <mat-table class=\"mat-elevation-z6 mt-20\" #table matSort [dataSource]=\"tableSourceUsers\" matSortActive=\"last_login\" matSortDirection=\"desc\" matSortDisableClear>\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Nombre</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">{{ user.name }} {{ user.lastname }}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">{{ user.email }}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"role\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Tipo</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">{{ user.role }}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"state\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Estado</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">{{ user.state }}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"last_login\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Ultima Conexion</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">{{ user.last_login | amDateFormat:'DD/MM/YYYY' }}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"company_name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Empresa</mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">{{ user.company_name }}</mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">\n              <button (click)=\"viewUserDetail(user)\" mat-icon-button>\n                <mat-icon aria-label=\"Ver detalle\">visibility</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"columnsTableUsersToShow\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: columnsTableUsersToShow;\"></mat-row>\n        </mat-table>\n\n        <mat-paginator class=\"of-theme\" #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n      </mat-tab>\n\n      <mat-tab label=\"Dispositivos\">\n        <app-good-job-devices></app-good-job-devices>\n      </mat-tab>\n\n      <mat-tab label=\"Preguntas\">\n        <app-good-job-questions></app-good-job-questions>\n      </mat-tab>\n\n      <mat-tab label=\"Facturación\">\n        <app-good-job-payments></app-good-job-payments>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media all and (max-width: 768px) {\n  [class*='hidden-'][class*='-xs'] {\n    display: none !important; } }\n\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  [class*='hidden-'][class*='-md'] {\n    display: none !important; } }\n\n@media all and (min-width: 1024px) {\n  [class*='hidden-'][class*='-lg'] {\n    display: none !important; } }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mr-0 {\n  margin-right: 0; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.ml-0 {\n  margin-left: 0; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mr-20 {\n  margin-right: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mr-30 {\n  margin-right: 30px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mr-40 {\n  margin-right: 40px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.mr-50 {\n  margin-right: 50px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.mr-60 {\n  margin-right: 60px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.mr-70 {\n  margin-right: 70px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.mr-80 {\n  margin-right: 80px; }\n\n.mb-80 {\n  margin-bottom: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.mr-90 {\n  margin-right: 90px; }\n\n.mb-90 {\n  margin-bottom: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.mr-100 {\n  margin-right: 100px; }\n\n.mb-100 {\n  margin-bottom: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.dpBlock {\n  display: block; }\n\n.dpInBlock {\n  display: inline-block; }\n\n.dpNone {\n  display: none; }\n\n.align-right {\n  text-align: right; }\n\n.align-center {\n  text-align: center; }\n\n.align-left {\n  text-align: left; }\n\n.Settings__container .mat-tab-body-content {\n  padding-right: 10px;\n  padding-left: 10px; }\n\n.Settings__container form .col-expand .mat-form-field {\n  display: inline-block;\n  width: calc(50% - 20px); }\n  .Settings__container form .col-expand .mat-form-field:nth-child(odd) {\n    margin-right: 10px; }\n  .Settings__container form .col-expand .mat-form-field:nth-child(even) {\n    margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/components/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_services_profile_service__ = __webpack_require__("../../../../../src/app/dashboard/modules/profile/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_devices_devices_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_questions_questions_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_payments_payments_component__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SettingsComponent = (function () {
    function SettingsComponent(_profileService, _store, _formBuilder, _utils) {
        var _this = this;
        this._profileService = _profileService;
        this._store = _store;
        this._formBuilder = _formBuilder;
        this._utils = _utils;
        this.userLogged = this._profileService.getUserLogged();
        this.isLoading$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_11__store__["t" /* getLoading */]));
        this.users$ = this._store.pipe(Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_11__store__["w" /* getUsers */]));
        this.users$.subscribe(function (users) {
            if (typeof users === 'undefined') {
                return false;
            }
            _this.users = users;
            if (_this.userLogged.role === 'Admin') {
                _this.users = _this.users.filter(function (user) {
                    return user.role !== 'Admin';
                });
            }
            else if (_this.userLogged.role === 'Empresa') {
                _this.users = _this.users.filter(function (user) {
                    return user.company === _this.userLogged._id && user._id !== _this.userLogged._id;
                });
            }
            _this.tableSourceUsers = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */](_this.users);
            _this.tableSourceUsers.sort = _this.dataListUsers;
            _this.tableSourceUsers.paginator = _this.paginatorUsers;
            _this.columnsTableUsersToShow = ['name', 'email', 'role', 'last_login', 'state', 'company_name', 'actions'];
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    SettingsComponent.prototype.onChangeTab = function (event) {
        switch (event.index) {
            case 0:
                this.getUsers();
                break;
            case 1:
                this.devicesComponent.getDevices();
                break;
            case 2:
                this.questionsComponent.getQuestions();
                this.questionsComponent.getDevices();
                if (this.userLogged.role === 'Admin') {
                    this.questionsComponent.getCompanies();
                    this.questionsComponent.getSucursales();
                }
                else {
                    this.questionsComponent.companies = [];
                    this.questionsComponent.getSucursales(this.userLogged._id);
                }
                break;
            case 3:
                this.paymentsComponent.getPayments();
                this.paymentsComponent.getCompanies();
                break;
        }
    };
    SettingsComponent.prototype.getUsers = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__store__["m" /* GetUsers */]());
    };
    SettingsComponent.prototype.applyFilterUsers = function (filterValue) {
        this.tableSourceUsers.filter = filterValue.trim().toLowerCase();
    };
    SettingsComponent.prototype.viewUserDetail = function (user) {
        var _this = this;
        var userToShow = Object.assign({}, user);
        userToShow.image = userToShow.image !== ''
            ? this._profileService.getUserAvatar(userToShow.image) :
            'https://material.io/tools/icons/static/icons/baseline-account_circle-24px.svg';
        this._utils.showDialog({
            width: 600,
            data: {
                title: 'Ver detalle',
                model: userToShow,
                template: "\n          <div class=\"align-center\">\n            <img class=\"avatar-profile mb-20\" src=\"" + userToShow.image + "\" alt=\"" + userToShow.username + "\">\n            <h1>" + userToShow.name + " " + userToShow.lastname + "</h1>\n            <p><strong>Fecha creaci\u00F3n:</strong> " + __WEBPACK_IMPORTED_MODULE_4_moment__(Number(userToShow.create_at)).format('DD MMM, YYYY') + "</p>\n            <p><strong>Ultima conexion:</strong> " + __WEBPACK_IMPORTED_MODULE_4_moment__(Number(userToShow.last_login)).format('DD MMM, YYYY') + "</p>\n            <p><strong>Correo electronico:</strong> " + userToShow.email + "</p>\n            <p><strong>Telefono:</strong> " + userToShow.phone + "</p>\n            <p><strong>Ubicaci\u00F3n:</strong> " + userToShow.city + ", " + userToShow.country + "</p>\n            <p><strong>Role:</strong> " + userToShow.role + "</p>\n            <p><strong>Estado:</strong> " + userToShow.state + "</p>\n\n            <h2 class=\"mt-20\">Datos de la Empresa</h2>\n            <p><strong>Empresa:</strong> " + userToShow.company_name + "</p>\n            <p><strong>Razon Social:</strong> " + userToShow.about + "</p>\n          </div>\n        ",
                actions: [
                    {
                        callback: 'changeStateUser', placeholder: 'Activar/desactivar usuario'
                    }
                ],
                changeStateUser: function (userToUpdate) {
                    userToUpdate.state = userToUpdate.state === 'ACTIVE' ? 'DESACTIVE' : 'ACTIVE';
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__store__["d" /* ChagingStateUser */](userToUpdate));
                }
            },
            onClose: function () {
                _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__store__["m" /* GetUsers */]());
            }
        });
    };
    SettingsComponent.prototype.registerUser = function () {
        var _this = this;
        var userToRegister = this._profileService.getUserEmpty();
        this.userRegisterForm = this._formBuilder.group({
            _id: [userToRegister._id, ''],
            username: [userToRegister.username, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            name: [userToRegister.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastname: [userToRegister.lastname, ''],
            password: ['default', ''],
            email: [userToRegister.email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            role: [this.userLogged.role === 'Empresa' ? 'Sucursal' : 'Empresa', ''],
            company: [this.userLogged.role === 'Empresa' ? this.userLogged._id : userToRegister.company, ''],
            company_name: [this.userLogged.role === 'Empresa' ? this.userLogged.company_name : userToRegister.company_name, ''],
        });
        this._utils.showDialog({
            width: 600,
            data: {
                title: 'Ver detalle',
                confirm: true,
                model: this.userRegisterForm.value,
                formElement: this.userRegisterForm,
                form: [
                    {
                        name: 'username',
                        type: 'text',
                        placeholder: 'Nombre usuario',
                        required: true,
                        errorMessage: 'Debe ingresar un nombre de usuario'
                    },
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Nombres',
                        required: true,
                        errorMessage: 'Debe ingresar un nombre'
                    },
                    { name: 'lastname', type: 'text', placeholder: 'Apellidos' },
                    {
                        name: 'email',
                        type: 'text',
                        placeholder: 'Correo electronico',
                        required: true,
                        errorMessage: 'Debe ingresar un correo electronico'
                    },
                ],
                onChange: function (model) {
                    _this.userRegisterForm.patchValue(model);
                },
            },
            onClose: function (result) {
                if (result.action && _this.userRegisterForm.valid) {
                    _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__store__["n" /* RegisteringUser */](_this.userRegisterForm.value));
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__components_devices_devices_component__["a" /* DevicesComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_devices_devices_component__["a" /* DevicesComponent */])
    ], SettingsComponent.prototype, "devicesComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__components_questions_questions_component__["a" /* QuestionsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__components_questions_questions_component__["a" /* QuestionsComponent */])
    ], SettingsComponent.prototype, "questionsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__components_payments_payments_component__["a" /* PaymentsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components_payments_payments_component__["a" /* PaymentsComponent */])
    ], SettingsComponent.prototype, "paymentsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSort */])
    ], SettingsComponent.prototype, "dataListUsers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginator */])
    ], SettingsComponent.prototype, "paginatorUsers", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-good-job-settings',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/modules/settings/components/settings.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services__["a" /* SettingsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__profile_services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__shared_services__["b" /* UtilsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/modules/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_dashboard_modules_settings_components__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_dashboard_modules_settings_services__ = __webpack_require__("../../../../../src/app/dashboard/modules/settings/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__app_dashboard_modules_settings_components__["a" /* SettingsComponent */], pathMatch: 'full' },
];
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
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
            declarations: __WEBPACK_IMPORTED_MODULE_7__app_dashboard_modules_settings_components__["b" /* components */].slice(),
            providers: __WEBPACK_IMPORTED_MODULE_8__app_dashboard_modules_settings_services__["b" /* services */].slice(),
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../angular5-csv/Angular5-csv.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CsvConfigConsts = (function () {
    function CsvConfigConsts() {
    }
    CsvConfigConsts.EOL = "\r\n";
    CsvConfigConsts.BOM = "\ufeff";
    CsvConfigConsts.DEFAULT_FIELD_SEPARATOR = ',';
    CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR = '.';
    CsvConfigConsts.DEFAULT_QUOTE = '"';
    CsvConfigConsts.DEFAULT_SHOW_TITLE = false;
    CsvConfigConsts.DEFAULT_TITLE = 'My Report';
    CsvConfigConsts.DEFAULT_FILENAME = 'mycsv.csv';
    CsvConfigConsts.DEFAULT_SHOW_LABELS = false;
    CsvConfigConsts.DEFAULT_USE_BOM = true;
    CsvConfigConsts.DEFAULT_HEADER = [];
    CsvConfigConsts.DEFAULT_NO_DOWNLOAD = false;
    return CsvConfigConsts;
}());
exports.CsvConfigConsts = CsvConfigConsts;
exports.ConfigDefaults = {
    filename: CsvConfigConsts.DEFAULT_FILENAME,
    fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
    quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
    decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
    showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
    showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
    title: CsvConfigConsts.DEFAULT_TITLE,
    useBom: CsvConfigConsts.DEFAULT_USE_BOM,
    headers: CsvConfigConsts.DEFAULT_HEADER,
    noDownload: CsvConfigConsts.DEFAULT_NO_DOWNLOAD
};
var Angular5Csv = (function () {
    function Angular5Csv(DataJSON, filename, options) {
        this.csv = "";
        var config = options || {};
        this.data = typeof DataJSON != 'object' ? JSON.parse(DataJSON) : DataJSON;
        this._options = objectAssign({}, exports.ConfigDefaults, config);
        if (this._options.filename) {
            this._options.filename = filename;
        }
        this.generateCsv();
    }
    /**
     * Generate and Download Csv
     */
    Angular5Csv.prototype.generateCsv = function () {
        if (this._options.useBom) {
            this.csv += CsvConfigConsts.BOM;
        }
        if (this._options.showTitle) {
            this.csv += this._options.title + '\r\n\n';
        }
        this.getHeaders();
        this.getBody();
        if (this.csv == '') {
            console.log("Invalid data");
            return;
        }
        if (this._options.noDownload) {
            return this.csv;
        }
        var blob = new Blob([this.csv], { "type": "text/csv;charset=utf8;" });
        if (navigator.msSaveBlob) {
            var filename = this._options.filename.replace(/ /g, "_") + ".csv";
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var uri = 'data:attachment/csv;charset=utf-8,' + encodeURI(this.csv);
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = this._options.filename.replace(/ /g, "_") + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    /**
     * Create Headers
     */
    Angular5Csv.prototype.getHeaders = function () {
        if (this._options.headers.length > 0) {
            var row = "";
            for (var _i = 0, _a = this._options.headers; _i < _a.length; _i++) {
                var column = _a[_i];
                row += column + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Create Body
     */
    Angular5Csv.prototype.getBody = function () {
        for (var i = 0; i < this.data.length; i++) {
            var row = "";
            for (var index in this.data[i]) {
                row += this.formartData(this.data[i][index]) + this._options.fieldSeparator;
            }
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    };
    /**
     * Format Data
     * @param {any} data
     */
    Angular5Csv.prototype.formartData = function (data) {
        if (this._options.decimalseparator === 'locale' && Angular5Csv.isFloat(data)) {
            return data.toLocaleString();
        }
        if (this._options.decimalseparator !== '.' && Angular5Csv.isFloat(data)) {
            return data.toString().replace('.', this._options.decimalseparator);
        }
        if (typeof data === 'string') {
            data = data.replace(/"/g, '""');
            if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                data = this._options.quoteStrings + data + this._options.quoteStrings;
            }
            return data;
        }
        if (typeof data === 'boolean') {
            return data ? 'TRUE' : 'FALSE';
        }
        return data;
    };
    /**
     * Check if is Float
     * @param {any} input
     */
    Angular5Csv.isFloat = function (input) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
    };
    return Angular5Csv;
}());
exports.Angular5Csv = Angular5Csv;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
/**
 * Convet to Object
 * @param {any} val
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
/**
 * Assign data  to new Object
 * @param {any}   target
 * @param {any[]} ...source
 */
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=Angular5-csv.js.map

/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-routes-module"],{

/***/ "2Wfa":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-settings/account-settings.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-4\">\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4>Seleccione el tema</h4>\n                <hr>\n                <div class=\"r-panel-body\">\n\n                    <ul id=\"themecolors\" class=\"m-t-20\">\n                        <li><b>Con el sidebar claro</b></li>\n                        <li><a (click)=\"changeTheme('default')\" data-theme=\"default\" class=\"selector default-theme\">1</a></li>\n                        <li><a (click)=\"changeTheme('green')\" data-theme=\"green\" class=\"selector green-theme\">2</a></li>\n                        <li><a (click)=\"changeTheme('red')\" data-theme=\"red\" class=\"selector red-theme\">3</a></li>\n                        <li><a (click)=\"changeTheme('blue')\" data-theme=\"blue\" class=\"selector blue-theme\">4</a></li>\n                        <li><a (click)=\"changeTheme('purple')\" data-theme=\"purple\" class=\"selector purple-theme\">5</a></li>\n                        <li><a (click)=\"changeTheme('megna')\" data-theme=\"megna\" class=\"selector megna-theme\">6</a></li>\n\n                        <li class=\"d-block m-t-30\"><b>Con el sidebar oscuro</b></li>\n                        <li><a (click)=\"changeTheme('default-dark')\" data-theme=\"default-dark\" class=\"selector default-dark-theme\">7</a></li>\n                        <li><a (click)=\"changeTheme('green-dark')\" data-theme=\"green-dark\" class=\"selector green-dark-theme\">8</a></li>\n                        <li><a (click)=\"changeTheme('red-dark')\" data-theme=\"red-dark\" class=\"selector red-dark-theme\">9</a></li>\n                        <li><a (click)=\"changeTheme('blue-dark')\" data-theme=\"blue-dark\" class=\"selector blue-dark-theme \">10</a></li>\n                        <li><a (click)=\"changeTheme('purple-dark')\" data-theme=\"purple-dark\" class=\"selector purple-dark-theme\">11</a></li>\n                        <li><a (click)=\"changeTheme('megna-dark')\" data-theme=\"megna-dark\" class=\"selector megna-dark-theme\">12</a></li>\n                    </ul>\n\n                </div>\n                <!-- <div class=\"r-panel-body\">\n                    <ul id=\"themecolors\" class=\"m-t-20\">\n                        <li><b>Con el sidebar claro</b></li>\n                        <li><a #link1 (click)=\"changeTheme('default', link1 )\" data-theme=\"default\" class=\"selector default-theme\">1</a></li>\n                        <li><a #link2 (click)=\"changeTheme('green', link2 )\" data-theme=\"green\" class=\"selector green-theme\">2</a></li>\n                        <li><a #link3 (click)=\"changeTheme('red', link3 )\" data-theme=\"red\" class=\"selector red-theme\">3</a></li>\n                        <li><a #link4 (click)=\"changeTheme('blue', link4 )\" data-theme=\"blue\" class=\"selector blue-theme\">4</a></li>\n                        <li><a #link5 (click)=\"changeTheme('purple', link5 )\" data-theme=\"purple\" class=\"selector purple-theme\">5</a></li>\n                        <li><a #link6 (click)=\"changeTheme('megna', link6 )\" data-theme=\"megna\" class=\"selector megna-theme\">6</a></li>\n\n                        <li class=\"d-block m-t-30\"><b>Con el sidebar oscuro</b></li>\n                        <li><a #link7 (click)=\"changeTheme('default-dark', link7 )\" data-theme=\"default-dark\" class=\"selector default-dark-theme\">7</a></li>\n                        <li><a #link8 (click)=\"changeTheme('green-dark', link8 )\" data-theme=\"green-dark\" class=\"selector green-dark-theme\">8</a></li>\n                        <li><a #link9 (click)=\"changeTheme('red-dark', link9 )\" data-theme=\"red-dark\" class=\"selector red-dark-theme\">9</a></li>\n                        <li><a #link10 (click)=\"changeTheme('blue-dark', link10 )\" data-theme=\"blue-dark\" class=\"selector blue-dark-theme\">10</a></li>\n                        <li><a #link11 (click)=\"changeTheme('purple-dark', link11 )\" data-theme=\"purple-dark\" class=\"selector purple-dark-theme\">11</a></li>\n                        <li><a #link12 (click)=\"changeTheme('megna-dark', link12 )\" data-theme=\"megna-dark\" class=\"selector megna-dark-theme\">12</a></li>\n                    </ul>\n\n                </div> -->\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "E5tf":
/*!**********************************************!*\
  !*** ./src/app/pages/child-routes.module.ts ***!
  \**********************************************/
/*! exports provided: ChildRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildRoutesModule", function() { return ChildRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress/progress.component */ "EsRH");
/* harmony import */ var _graphic1_graphic1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphic1/graphic1.component */ "RHP/");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "SxNo");
/* harmony import */ var _promises_promises_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promises/promises.component */ "VAHl");
/* harmony import */ var _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rxjs/rxjs.component */ "IHpz");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "Y5Lh");
/* harmony import */ var _maintenance_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maintenance/users/users.component */ "uc4i");
/* harmony import */ var _maintenance_hospital_hospital_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maintenance/hospital/hospital.component */ "+IEk");
/* harmony import */ var _maintenance_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./maintenance/doctors/doctors.component */ "mA8/");
/* harmony import */ var _maintenance_doctors_doctor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./maintenance/doctors/doctor.component */ "r+Z6");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "YQc0");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../guards/admin.guard */ "Tk1w");
















const childRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], data: { title: 'Dashboard' } },
    { path: 'account-setting', component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_6__["AccountSettingsComponent"], data: { title: 'Tema' } },
    { path: 'graphic1', component: _graphic1_graphic1_component__WEBPACK_IMPORTED_MODULE_5__["Graphic1Component"], data: { title: 'Gráfica 1' } },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__["ProgressComponent"], data: { title: 'ProgressBar' } },
    { path: 'promises', component: _promises_promises_component__WEBPACK_IMPORTED_MODULE_7__["PromisesComponent"], data: { title: 'Promesas' } },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], data: { title: 'Perfil de usuario' } },
    { path: 'rxjs', component: _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_8__["RxjsComponent"], data: { title: 'Rxjs' } },
    { path: 'search/:terms', component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], data: { title: 'Busquedas' } },
    // Mantenimientos
    { path: 'doctors', component: _maintenance_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_12__["DoctorsComponent"], data: { title: 'Mantenimiento de Médicos' } },
    { path: 'doctor/:id', component: _maintenance_doctors_doctor_component__WEBPACK_IMPORTED_MODULE_13__["DoctorComponent"], data: { title: 'Mantenimiento de Médicos' } },
    { path: 'hospitals', component: _maintenance_hospital_hospital_component__WEBPACK_IMPORTED_MODULE_11__["HospitalComponent"], data: { title: 'Mantenimiento de Hospitales' } },
    // Rutas de administradores
    { path: 'users', canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]], component: _maintenance_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], data: { title: 'Mantenimiento de Usuarios' } },
];
let ChildRoutesModule = class ChildRoutesModule {
};
ChildRoutesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(childRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChildRoutesModule);



/***/ }),

/***/ "SxNo":
/*!**********************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-settings.component.html */ "2Wfa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "6nr9");




let AccountSettingsComponent = class AccountSettingsComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    ngOnInit() {
        this.links = document.querySelectorAll('.selector');
        this.settingsService.checkCurrentTheme(this.links);
    }
    changeTheme(theme) {
        this.settingsService.changeTheme(theme);
        this.settingsService.checkCurrentTheme(this.links);
    }
};
AccountSettingsComponent.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
AccountSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-account-settings',
        template: _raw_loader_account_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AccountSettingsComponent);



/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");




let AdminGuard = class AdminGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.userService.role === 'ADMIN_ROLE')
            return true;
        else {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ })

}]);
//# sourceMappingURL=child-routes-module.a928c9d87cd6be932a2d.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  <router-outlet>\r\n\r\n  </router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_addproject_addproject_component__ = __webpack_require__("../../../../../src/app/components/addproject/addproject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_addresource_addresource_component__ = __webpack_require__("../../../../../src/app/components/addresource/addresource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_resource_table_resource_table_component__ = __webpack_require__("../../../../../src/app/components/resource-table/resource-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_project_table_project_table_component__ = __webpack_require__("../../../../../src/app/components/project-table/project-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// 


// Other Imports

 // <-- #1 import module
// AngularFire Imports



// Component imports




// Service Imports




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'addproject', component: __WEBPACK_IMPORTED_MODULE_14__components_addproject_addproject_component__["a" /* AddProjectComponent */] },
    { path: 'addresource', component: __WEBPACK_IMPORTED_MODULE_15__components_addresource_addresource_component__["a" /* AddresourceComponent */] },
    { path: 'resourcetable', component: __WEBPACK_IMPORTED_MODULE_16__components_resource_table_resource_table_component__["a" /* ResourceTableComponent */] }
];
var firebaseConfig = {
    apiKey: 'AIzaSyDNXfKXx31YDhCccA-J2RTraYzguqFn75c',
    authDomain: 'project-manager-40e5a.firebaseapp.com',
    databaseURL: 'https://project-manager-40e5a.firebaseio.com',
    storageBucket: 'project-manager-40e5a.appspot.com',
    messagingSenderId: '62789613737'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_addproject_addproject_component__["a" /* AddProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_addresource_addresource_component__["a" /* AddresourceComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_resource_table_resource_table_component__["a" /* ResourceTableComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_project_table_project_table_component__["a" /* ProjectTableComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var AppService = (function () {
    // Resolve HTTP using the constructor
    function AppService(_http) {
        this._http = _http;
        this.greetUrl = 'api/Hello';
    }
    AppService.prototype.sayHello = function () {
        return this._http.get(this.greetUrl).map(function (response) {
            return response.text();
        });
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/addproject/addproject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -60px;\r\n\r\n  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */\r\n  opacity: 0;\r\n  transition: opacity 1s;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addproject/addproject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"text-center\">Add New Project</h1>\r\n  <br>\r\n  <form #project=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <h2>Main details</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col col-lg-3\">\r\n          <label for=\"name\">Project name</label>\r\n          <input [(ngModel)]=\"newProject.name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required>\r\n        </div>\r\n        <div class=\"col col-lg-3\">\r\n          <label for=\"projectleader\">Project leader</label>\r\n          <input [(ngModel)]=\"newProject.projectleader\" type=\"text\" class=\"form-control\" id=\"projectleader\" name=\"projectleader\" required>\r\n        </div>\r\n        <div class=\"col col-lg-2\">\r\n          <label for=\"company\">Company</label>\r\n          <input [(ngModel)]=\"newProject.company\" type=\"text\" class=\"form-control\" id=\"company\" name=\"company\" required>\r\n        </div>\r\n        <div class=\"col col-lg-2\">\r\n          <label for=\"risk \">Probability of start</label>\r\n          <input [(ngModel)]=\"newProject.risk\" type=\"number\" placeholder=\"%\" min=\"0 \" max=\"100 \" class=\"form-control \" id=\"risk \" name>\r\n        </div>\r\n        <div class=\"col col-lg-2\">\r\n          <label for=\"risk \">Budget:</label>\r\n          <input [(ngModel)]=\"newProject.budget\" type=\"number \" min=\"0 \" max=\"100 \" class=\"form-control \" id=\"budget \" name=\"budget\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"form-group\" style=\"margin-bottom:50px; margin-top:25px\">\r\n      <div class=\"row \">\r\n\r\n        <div class=\"col col-lg-12\">\r\n          <h2>Schedule resources</h2>\r\n        </div>\r\n        <div class=\"col col-lg-12\">\r\n          <b>Please select how many resources you need for this project from each resource on each week.</b>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-12\" style=\"margin-top:20px\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-lg-4\">\r\n              <label for=\"startdate\">Start date (week):</label>\r\n              <input [(ngModel)]=\"newProject.startdate\" type=\"number\" placeholder=\"First week\" step=\"1\" min=\"1\" max=\"52\" class=\"form-control\"\r\n                id=\"startdate\" name=\"startdate\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"newProject.startdate >53\">\r\n                Value should be between 1 and 52/53!\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-4\">\r\n              <label for=\"duedate\">Due date (week):</label>\r\n              <input [(ngModel)]=\"newProject.duedate\" type=\"number\" placeholder=\"Last Week\" step=\"1\" min=\"1\" max=\"52\" class=\"form-control\"\r\n                id=\"duedate\" name=\"duedate\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"newProject.duedate >53\">\r\n                Value should be between 1 and 52/53!\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-4\">\r\n              <label for=\"plannedhours\">Planned hours:</label>\r\n              <input [(ngModel)]=\"newProject.plannedhours\" type=\"number\" placeholder=\"Planned hours\" step=\"1\" min=\"0\" max=\"1000\" class=\"form-control\"\r\n                id=\"plannedhours\" name=\"plannedhours\" value=\"\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"newProject.plannedhours >1000\">\r\n                Value is too high!\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-4 text-center\" style=\"width:100%; margin-top:30px\">\r\n              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" name=\"skillselect\" id=\"skillselect\">\r\n                <option value=\"C\">C</option>\r\n                <option value=\"C++\">C++</option>\r\n                <option value=\"C#\">C#</option>\r\n                <option value=\"Java\">Java</option>\r\n                <option value=\"JavaScript\">JavaScript</option>\r\n                <option value=\"HTML\">HTML</option>\r\n                <option value=\"CSS\">CSS</option>\r\n                <option value=\"Bootstrap\">Bootstrap</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col col-lg-1 text-center \" style=\"width:100%; margin-top:30px\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onPlus(project)\">+</button>\r\n            </div>\r\n            <div class=\"col col-lg-1 text-center\" style=\"width:100%; margin-top:30px\">\r\n              <input [(ngModel)]=\"resourceCount\" type=\"number\" placeholder=\"Count\" step=\"1\" min=\"1\" max=\"52\" class=\"form-control text-center\"\r\n                id=\"resourceCount\" name=\"resourceCount\">\r\n            </div>\r\n            <div class=\"col col-lg-1 text-center\" style=\"width:100%; margin-top:30px\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onMinus(project)\">-</button>\r\n            </div>\r\n            <div class=\"col col-lg-4 text-center\" style=\"width:100%; margin-top:30px\">\r\n              <button type=\"button\" class=\"btn btn-warning\" (click)=\"onAddSkill(project)\">Set skill</button>\r\n            </div>\r\n            <div class=\"col col-lg-2\" style=\"width:100%; margin-top:30px\">\r\n              <h2>Skills</h2>\r\n            </div>\r\n            <div class=\"col col-lg-10\" style=\"width:100%; margin-top:30px\">\r\n\r\n              <button *ngFor=\"let skill of skills\" type=\"button\" class=\"btn btn-success\" (click)=\"onRemoveSkill(skill)\" style=\"margin:5px\">\r\n                <b>{{skill.name}}:</b> &nbsp; {{skill.count}} &nbsp; &nbsp;\r\n                <b>&#x2716;</b>\r\n              </button>\r\n\r\n            </div>\r\n\r\n            <div class=\"col col-lg-12 text-center \" style=\"margin-top:50px; margin-bottom:25px\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onAddDefault(project)\">Add as Schedule</button>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-12\">\r\n          <h2>Calendar</h2>\r\n        </div>\r\n\r\n\r\n        <div class=\"col col-lg-12\">\r\n          <ul style=\"margin-top:50px\">\r\n            <li *ngFor=\"let year of newProject.calendar\" class=\"card text-center\">\r\n              <h4 class=\"card-title\">\r\n                {{year.id}}\r\n                <hr>\r\n              </h4>\r\n              <div *ngFor=\"let week of year.weeks\" class=\"text-center\">\r\n                <div *ngIf=\"week.required > 0\" class=\"row\">\r\n                  <div class=\"col col-lg-2\">\r\n                    <h4 class=\"card-title\">\r\n                      Week: {{week.id}}\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"col col-lg-2\">\r\n                    Current: {{week.current}}\r\n                  </div>\r\n                  <div class=\"col col-lg-2\">\r\n                    Max: {{week.required}}\r\n                  </div>\r\n                  <div class=\"col col-lg-6\">\r\n\r\n                    <button *ngFor=\"let skill of week.skills\" type=\"button\" class=\"btn btn-secondary\" style=\"margin:5px\">\r\n                      <b>{{skill.name}}:</b> &nbsp; {{skill.count}} &nbsp; &nbsp;\r\n\r\n                    </button>\r\n\r\n                  </div>\r\n                </div>\r\n                <hr *ngIf=\"week.required > 0\">\r\n              </div>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <button type=\"submit \" class=\"btn btn-success\" (click)=\"onAddProject()\">Submit</button>\r\n  </form>\r\n  <hr>\r\n  <h2>Projects:</h2>\r\n  <div class=\"container\">\r\n    <div class=\"row \" style=\"margin-left:150px\">\r\n      <div class=\" card col col-lg-5 \" *ngFor=\" let project of projects\" style=\"margin: 25px\">\r\n        <div class=\"card-block \">\r\n          <h4 class=\"card-title \">{{project.name}}</h4>\r\n        </div>\r\n        <ul class=\"list-group list-group-flush \">\r\n          <li class=\"list-group-item \">\r\n            <b>Project leader:</b> &nbsp;{{project.projectleader}}</li>\r\n          <li class=\"list-group-item \">\r\n            <b>Company: </b> &nbsp; {{project.company}}</li>\r\n          <li class=\"list-group-item \">\r\n            <b>Budget:</b> &nbsp; &#36;{{project.budget}}\r\n\r\n          </li>\r\n          <li class=\"list-group-item \">\r\n            <b>ID:</b> &nbsp; {{project.id}}</li>\r\n        </ul>\r\n        <div class=\"card-block text-center \">\r\n          <button class=\"btn btn-danger\" (click)=\"onDelete(project)\">\r\n            <b>Delete</b>\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/addproject/addproject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_projects2__ = __webpack_require__("../../../../../src/app/mockdata/mock-projects2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mockdata_mock_calendar__ = __webpack_require__("../../../../../src/app/mockdata/mock-calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mockdata_mock_resources__ = __webpack_require__("../../../../../src/app/mockdata/mock-resources.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProjectComponent = (function () {
    function AddProjectComponent() {
        this.projects = __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_projects2__["a" /* PROJECTS2 */];
        this.calendar = __WEBPACK_IMPORTED_MODULE_2__mockdata_mock_calendar__["a" /* CALENDAR */];
        this.resources = __WEBPACK_IMPORTED_MODULE_3__mockdata_mock_resources__["a" /* RESOURCES */];
        this.resourceCount = 0;
        this.skills = [];
        this.editing = false;
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.initProject();
    };
    AddProjectComponent.prototype.initProject = function () {
        var weeks = [];
        for (var i = 1; i < 53; i++) {
            var tmp = {
                id: i,
                skills: [{ count: 0, name: '' }],
                current: 0,
                required: 0
            };
            weeks.push(tmp);
        }
        this.skills = [];
        this.newProject = {
            id: 0,
            name: '',
            projectleader: '',
            company: '',
            risk: 0,
            startdate: null,
            duedate: null,
            plannedhours: null,
            currenthours: null,
            budget: 0,
            calendar: [{ id: 2017, weeks: null }],
            skills: [],
            resources: []
        };
        this.newProject.calendar[0].weeks = weeks;
    };
    AddProjectComponent.prototype.onMinus = function () {
        if (this.resourceCount > 0)
            this.resourceCount--;
    };
    AddProjectComponent.prototype.onPlus = function () {
        if (50 > this.resourceCount)
            this.resourceCount++;
    };
    AddProjectComponent.prototype.onAddSkill = function () {
        var DropdownList = document.getElementById('skillselect'), SelectedIndex = DropdownList.selectedIndex, str = DropdownList.options[SelectedIndex].value, indexOfElement = this.skills.findIndex(function (i) { return i.name === str; });
        if (indexOfElement > -1) {
            this.skills.splice(indexOfElement, 1);
        }
        this.skills.push({
            count: this.resourceCount,
            name: str
        });
    };
    AddProjectComponent.prototype.onAddDefault = function () {
        for (var i = this.newProject.startdate - 1; i < this.newProject.duedate; i++) {
            this.newProject.calendar[0].weeks[i].required = this.newProject.plannedhours;
            this.newProject.calendar[0].weeks[i].skills = this.skills;
        }
        this.skills = [];
    };
    AddProjectComponent.prototype.onAddProject = function () {
        if (this.newProject.name && this.newProject.projectleader) {
            var idd;
            if (!this.projects.length) {
                idd = 0;
            }
            else {
                idd = (this.projects[this.projects.length - 1].id | 0) + 1;
            }
            this.projects.push({
                id: idd,
                name: this.newProject.name,
                projectleader: this.newProject.projectleader,
                company: this.newProject.company,
                risk: this.newProject.risk,
                startdate: this.newProject.startdate,
                duedate: this.newProject.duedate,
                plannedhours: this.newProject.plannedhours,
                currenthours: this.newProject.currenthours,
                budget: this.newProject.budget,
                calendar: this.newProject.calendar,
                skills: this.newProject.skills,
                resources: this.newProject.resources
            });
            this.initProject();
        }
        else {
            window.alert('First 2 inputs are required');
        }
    };
    AddProjectComponent.prototype.onEdit = function (project) {
        if (this.editing) {
            project.id = this.newProject.id;
            project.name = this.newProject.name;
            project.projectleader = this.newProject.projectleader;
            project.company = this.newProject.company;
            project.risk = this.newProject.risk;
            project.startdate = this.newProject.startdate;
            project.duedate = this.newProject.duedate;
            project.plannedhours = this.newProject.plannedhours;
            project.currenthours = this.newProject.currenthours;
            project.budget = this.newProject.budget;
            project.calendar = this.newProject.calendar;
            project.skills = this.newProject.skills;
            project.resources = this.newProject.resources;
            this.editing = false;
        }
        else {
            this.newProject.id = project.id;
            this.newProject.name = project.name;
            this.newProject.projectleader = project.projectleader;
            this.newProject.company = project.company;
            this.newProject.risk = project.risk;
            this.newProject.startdate = project.startdate;
            this.newProject.duedate = project.duedate;
            this.newProject.plannedhours = project.plannedhours;
            this.newProject.currenthours = project.currenthours;
            this.newProject.budget = project.budget;
            this.newProject.calendar = project.calendar;
            this.newProject.skills = project.skills;
            this.newProject.resources = project.resources;
            this.editing = true;
        }
    };
    AddProjectComponent.prototype.onDelete = function (project) {
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == project.id) {
                this.projects.splice(i, 1);
            }
        }
    };
    AddProjectComponent.prototype.onRemoveSkill = function (skill) {
        console.log(skill);
        var indexOfElement = this.skills.findIndex(function (i) { return i.name === skill.name; });
        if (indexOfElement > -1) {
            this.skills.splice(indexOfElement, 1);
        }
    };
    return AddProjectComponent;
}());
AddProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addproject',
        template: __webpack_require__("../../../../../src/app/components/addproject/addproject.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/addproject/addproject.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddProjectComponent);

//# sourceMappingURL=addproject.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/addresource/addresource.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 5px solid #42a948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addresource/addresource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"text-center\">Add New Resource</h1>\r\n  <br>\r\n  <form name=\"resourceForm\">\r\n    <h2>Main details</h2>\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-lg-4\">\r\n          <label for=\"firstname\">First Name</label>\r\n          <input [(ngModel)]=\"newResource.firstname\" type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" class=\"form-control\"\r\n            required minlength=\"3\" #firstname=\"ngModel\">\r\n\r\n          <div *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"firstname.errors.required\">\r\n              First Name is required.\r\n            </div>\r\n            <div *ngIf=\"firstname.errors.minlength\">\r\n              First Name must be at least 4 characters long.\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col col-lg-4\">\r\n          <label for=\"lastname\">Last Name</label>\r\n          <input [(ngModel)]=\"newResource.lastname\" type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\" class=\"form-control\"\r\n            required minlength=\"3\" #lastname=\"ngModel\">\r\n\r\n          <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"lastname.errors.required\">\r\n              Last Name is required.\r\n            </div>\r\n            <div *ngIf=\"lastname.errors.minlength\">\r\n              Last Name must be at least 4 characters long.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col col-lg-4\">\r\n          <label for=\"phone\">Phone</label>\r\n          <input [(ngModel)]=\"newResource.phone\" type=\"phone\" class=\"form-control\" id=\"phone\" name=\"phone\" class=\"form-control\" required\r\n            minlength=\"10\" #phone=\"ngModel\">\r\n\r\n          <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\r\n\r\n            <div *ngIf=\"phone.errors.required\">\r\n              Phone number is required.\r\n            </div>\r\n            <div *ngIf=\"phone.errors.minlength\">\r\n              Phone number must be at least 10 digits long.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-lg-4\">\r\n          <label for=\"email\">E-mail</label>\r\n          <input [(ngModel)]=\"newResource.email\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" class=\"form-control\" required\r\n            minlength=\"10\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n\r\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n\r\n            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n              <div *ngIf=\"email.errors && email.errors.required\">\r\n                Email is required\r\n              </div>\r\n              <div *ngIf=\"email.errors && email.errors.pattern\">\r\n                Email is invalid\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col col-lg-4\">\r\n          <label for=\"salary\">Salary / week</label>\r\n          <input [(ngModel)]=\"newResource.salary\" type=\"curr\" class=\"form-control\" id=\"salary\" name=\"salary\">\r\n        </div>\r\n        <div class=\"col col-lg-4\">\r\n          <label for=\"company\">Company</label>\r\n          <input [(ngModel)]=\"newResource.company\" type=\"text\" class=\"form-control\" id=\"company\" name=\"company\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"container\" style=\"margin-bottom:50px; margin-top:50px\">\r\n        <h2>Avalability</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col col-lg-3\">\r\n            <label for=\"availablefrom\">Available from week:</label>\r\n            <input [(ngModel)]=\"availablefrom\" type=\"number\" placeholder=\"First week\" step=\"1\" min=\"1\" max=\"52\" class=\"form-control\"\r\n              id=\"availablefrom\" name=\"availablefrom\">\r\n            <!-- <select *ngFor=\"let number of weeknumbers\" id=\"availablefrom\" name=\"availablefrom\">\r\n              <option value=\"number\">{{number}}</option>\r\n            </select> -->\r\n            <div class=\"alert alert-danger\" *ngIf=\"availablefrom >53\">\r\n              Value should be between 1 and 52/53!\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-3\">\r\n            <label for=\"availableto\">Available until week:</label>\r\n            <input [(ngModel)]=\"availableto\" type=\"number\" placeholder=\"Last Week\" step=\"1\" min=\"1\" max=\"52\" class=\"form-control\" id=\"availableto\"\r\n              name=\"availableto\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"availableto >53\">\r\n              Value should be between 1 and 52/53!\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-3\">\r\n            <label for=\"workinghours\">Working hours per week</label>\r\n            <input [(ngModel)]=\"workinghours\" type=\"number\" placeholder=\"Hours per week\" step=\"1\" min=\"0\" max=\"40\" class=\"form-control\"\r\n              id=\"workinghours\" name=\"workinghours\" value=\"\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"workinghours >40\">\r\n              Value should be between 0 and 40!\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-3\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAddDefault()\" style=\"margin-top:32px;margin-left: 40px\">Add as default</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col col-lg-2\">\r\n          </div>\r\n          <div class=\"col col-lg-8\">\r\n            <ul class=\"heroes\" style=\"margin-top:50px\">\r\n              <li *ngFor=\"let year of newResource.calendar\" class=\"card text-center\">\r\n                <h4 class=\"card-title\">\r\n                  {{year.id}}\r\n                  <hr>\r\n                </h4>\r\n                <div *ngFor=\"let week of year.weeks\" class=\"text-center\">\r\n                  <div *ngIf=\"week.max !==0\" class=\"row\">\r\n                    <div class=\"col col-lg-4\">\r\n                      <h4 class=\"card-title\">\r\n                        Week: {{week.id}}\r\n                      </h4>\r\n                    </div>\r\n                    <div class=\"col col-lg-4\">\r\n                      Current: {{week.current}}\r\n                    </div>\r\n                    <div class=\"col col-lg-4\">\r\n                      Max: {{week.max}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col col-lg-2\">\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button (click)=\"addResource(resourceForm)\" class=\" text-center btn btn-success\">Submit</button>\r\n  </form>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-5\">\r\n        <label>Select Skills:</label>\r\n        <ss-multiselect-dropdown [options]=\"myOptions\" [(ngModel)]=\"optionsModel\" (ngModelChange)=\"onChange($event)\"></ss-multiselect-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2>Projects:</h2>\r\n  <div class=\"row \" style=\"margin-left:150px\">\r\n    <div class=\" card col col-lg-5 \" *ngFor=\" let resource of resources\" style=\"margin: 25px\">\r\n      <div class=\"card-block \">\r\n        <h4 class=\"card-title \">{{resource.firstname}} &nbsp; {{resource.lastname}}</h4>\r\n      </div>\r\n      <ul class=\"list-group list-group-flush \">\r\n        <li class=\"list-group-item \">\r\n          <b>E-mail:</b> &nbsp;{{resource.email}}</li>\r\n        <li class=\"list-group-item \">\r\n          <b>Phone: </b> &nbsp; {{resource.phone}}</li>\r\n        <li class=\"list-group-item \">\r\n          <b>Company:</b> &nbsp; {{resource.company}}\r\n        </li>\r\n        <li class=\"list-group-item \">\r\n          <b>ID:</b> &nbsp; {{resource.id}}</li>\r\n      </ul>\r\n      <div class=\"card-block text-center \">\r\n        <button class=\"btn btn-danger\" (click)=\"onDelete(project)\">\r\n          <b>Delete</b>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/addresource/addresource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddresourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_resources__ = __webpack_require__("../../../../../src/app/mockdata/mock-resources.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mockdata_mock_calendar__ = __webpack_require__("../../../../../src/app/mockdata/mock-calendar.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddresourceComponent = (function () {
    function AddresourceComponent() {
        //static things
        this.resources = __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_resources__["a" /* RESOURCES */];
        this.calendar = __WEBPACK_IMPORTED_MODULE_2__mockdata_mock_calendar__["a" /* CALENDAR */];
        this.editing = false;
        this.myOptions = [
            { id: 1, name: 'JavaScript' },
            { id: 2, name: 'Java' },
            { id: 3, name: 'C++' },
            { id: 4, name: 'C#' },
            { id: 5, name: 'HTML' },
            { id: 6, name: 'CSS' },
            { id: 7, name: 'SQL' }
        ];
    }
    AddresourceComponent.prototype.ngOnInit = function () {
        this.initResource();
    };
    AddresourceComponent.prototype.initResource = function () {
        this.availableto = null;
        this.availablefrom = null;
        this.workinghours = null;
        var weeks = [];
        for (var i = 1; i < 53; i++) {
            var tmp = { id: i, current: 0, max: 0 };
            weeks.push(tmp);
        }
        this.newResource = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            salary: null,
            company: '',
            phone: null,
            skills: [],
            calendar: [{ id: 2017, weeks: null }],
            occupacity: null
        };
        this.newResource.calendar[0].weeks = weeks;
    };
    AddresourceComponent.prototype.addResource = function (resourceForm) {
        if (this.newResource.firstname &&
            this.newResource.lastname &&
            this.newResource.phone &&
            this.newResource.email) {
            var idd, selOpt = [];
            if (!this.resources.length) {
                idd = 0;
            }
            else {
                idd = (this.resources[this.resources.length - 1].id | 0) + 1;
            }
            this.selectedOptions.map(function (x) { return selOpt.push(x.name); });
            this.resources.push({
                id: idd,
                firstname: this.newResource.firstname,
                lastname: this.newResource.lastname,
                email: this.newResource.email,
                salary: this.newResource.salary,
                company: this.newResource.company,
                phone: this.newResource.phone,
                occupacity: this.newResource.occupacity,
                calendar: this.newResource.calendar,
                skills: selOpt
            });
            this.initResource();
        }
        else {
            window.alert('First 4 inputs are required');
        }
    };
    AddresourceComponent.prototype.onChange = function () {
        var _this = this;
        this.selectedOptions =
            this.optionsModel.map(function (rec) { return _this.myOptions.find(function (x) { return x.id === rec; }); }) ||
                [];
    };
    AddresourceComponent.prototype.onDelete = function (resource) {
        for (var i = 0; i < this.resources.length; i++) {
            if (this.resources[i].id == resource.id) {
                this.resources.splice(i, 1);
            }
        }
    };
    AddresourceComponent.prototype.onAddDefault = function () {
        for (var i = this.availablefrom - 1; i < this.availableto; i++) {
            this.newResource.calendar[0].weeks[i].max = this.workinghours;
        }
    };
    AddresourceComponent.prototype.onEdit = function (resource) {
        if (this.editing) {
            resource.id = this.newResource.id;
            resource.firstname = this.newResource.firstname;
            resource.lastname = this.newResource.lastname;
            resource.email = this.newResource.email;
            resource.salary = this.newResource.salary;
            resource.company = this.newResource.company;
            resource.phone = this.newResource.phone;
            resource.skills = this.newResource.skills;
            resource.occupacity = this.newResource.occupacity;
            resource.calendar = this.newResource.calendar;
            this.editing = false;
        }
        else {
            this.newResource.id = resource.id;
            this.newResource.firstname = resource.firstname;
            this.newResource.lastname = resource.lastname;
            this.newResource.email = resource.email;
            this.newResource.salary = resource.salary;
            this.newResource.company = resource.company;
            this.newResource.phone = resource.phone;
            this.newResource.skills = resource.skills;
            this.newResource.occupacity = resource.occupacity;
            this.newResource.calendar = resource.calendar;
            this.editing = true;
        }
    };
    return AddresourceComponent;
}());
AddresourceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addresource',
        template: __webpack_require__("../../../../../src/app/components/addresource/addresource.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/addresource/addresource.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddresourceComponent);

//# sourceMappingURL=addresource.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-table></app-project-table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-expand navbar-light bg-faded fixed-top\" style=\"opacity: 0.8; color:black\">\r\n  <div class=\"container\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n      aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <b> Project Manager</b>\r\n    </a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink='/'>Project Table\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink='/resourcetable'>Resource Table\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink='/addproject'>New project\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink='/addresource'>New resource\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink='/register'>Register\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink='/login'>Login\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-table/project-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* td li {\r\n  list-style-type: none;\r\n  text-align: left;\r\n} */\r\n\r\n/* table tr td {\r\n  position: relative;\r\n} */\r\n\r\n.inputSm {\r\n  width: 80px;\r\n  border: 2px solid #5cb85c;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-table/project-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Project name</th>\r\n          <th class=\"text-center\" scope=\"col\">Risk</th>\r\n          <th class=\"text-center\" scope=\"col\">Max [days]</th>\r\n          <th class=\"text-center\" scope=\"col\">Planned [days]</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week}}. week</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week + 1}}. week</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week + 2}}. week</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week + 3}}. week</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let projectEl of projects; let i = index;\">\r\n          <tr [ngClass]=\"setBackgroundColor(projectEl.plannedhours, sumWeekCounts(projectEl))\" (click)=\"toggleCollapse(i)\">\r\n            <th scope=\"row\">{{ projectEl.name }}\r\n              <i id=\"collapseIcon{{i}}\" class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\r\n            </th>\r\n            <td class=\"text-center\">{{ projectEl.risk }}</td>\r\n            <td class=\"text-center\">{{ projectEl.plannedhours }}</td>\r\n            <td class=\"text-center\">{{ sumWeekCounts(projectEl) }}</td>\r\n            <td class=\"text-center\">{{ sumSkillCounts(projectEl, 1) }}</td>\r\n            <td class=\"text-center\">{{ sumSkillCounts(projectEl, 2) }}</td>\r\n            <td class=\"text-center\">{{ sumSkillCounts(projectEl, 3) }}</td>\r\n            <td class=\"text-center\">{{ sumSkillCounts(projectEl, 4) }}</td>\r\n          </tr>\r\n          <tr class=\"table\" id=\"collapse{{i}}\" style=\"display: none\">\r\n            <td colspan=\"4\">\r\n              <div>Project leader: {{ projectEl.projectleader }}</div>\r\n              <div>Start date: {{ projectEl.startdate }}</div>\r\n              <div>Due date: {{ projectEl.duedate }}</div>\r\n            </td>\r\n            <td>\r\n              <ng-container *ngFor=\"let skill of projects[i].calendar[0].weeks[this.week - 1].skills; let j = index;\">\r\n                <span>{{ skill.name }} </span>\r\n                <a href=\"#\" (click)=\"decSkill(skill, projects[i].calendar[0].weeks[this.week - 1].skills);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <span class=\"badge badge-pill badge-primary pull-right\">{{ skill.count }}</span>\r\n                <a href=\"#\" (click)=\"incSkill(skill);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <br>\r\n              </ng-container>\r\n              <input class=\"inputSm\" id=\"input{{i}}0\" type=\"text\">\r\n              <br>\r\n              <button (click)=\"addResource(projects[i].calendar[0].weeks[this.week - 1].skills, i, 0);\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                Add resource\r\n              </button>\r\n            </td>\r\n            <td>\r\n              <ng-container *ngFor=\"let skill of projects[i].calendar[0].weeks[this.week].skills; let j = index;\">\r\n                <span>{{ skill.name }} </span>\r\n                <a href=\"#\" (click)=\"decSkill(skill, projects[i].calendar[0].weeks[this.week].skills);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <span class=\"badge badge-pill badge-primary pull-right\">{{ skill.count }}</span>\r\n                <a href=\"#\" (click)=\"incSkill(skill);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <br>\r\n              </ng-container>\r\n              <input class=\"inputSm\" id=\"input{{i}}1\" type=\"text\">\r\n              <br>\r\n              <button (click)=\"addResource(projects[i].calendar[0].weeks[this.week].skills, i, 1);\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                Add resource\r\n              </button>\r\n            </td>\r\n            <td>\r\n              <ng-container *ngFor=\"let skill of projects[i].calendar[0].weeks[this.week + 1].skills; let j = index;\">\r\n                <span>{{ skill.name }} </span>\r\n                <a href=\"#\" (click)=\"decSkill(skill, projects[i].calendar[0].weeks[this.week + 1].skills);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <span class=\"badge badge-pill badge-primary pull-right\">{{ skill.count }}</span>\r\n                <a href=\"#\" (click)=\"incSkill(skill);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <br>\r\n              </ng-container>\r\n              <input class=\"inputSm\" id=\"input{{i}}2\" type=\"text\">\r\n              <br>\r\n              <button (click)=\"addResource(projects[i].calendar[0].weeks[this.week + 1].skills, i, 2);\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                Add resource\r\n              </button>\r\n            </td>\r\n            <td>\r\n              <ng-container *ngFor=\"let skill of projects[i].calendar[0].weeks[this.week + 2].skills; let j = index;\">\r\n                <span>{{ skill.name }} </span>\r\n                <a href=\"#\" (click)=\"decSkill(skill, projects[i].calendar[0].weeks[this.week + 2].skills);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <span class=\"badge badge-pill badge-primary pull-right\">{{ skill.count }}</span>\r\n                <a href=\"#\" (click)=\"incSkill(skill);\" class=\"badge badge-secondary pull-right\">\r\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <br>\r\n              </ng-container>\r\n              <input class=\"inputSm\" id=\"input{{i}}3\" type=\"text\">\r\n              <br>\r\n              <button (click)=\"addResource(projects[i].calendar[0].weeks[this.week + 2].skills, i, 3);\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                Add resource\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-success col-lg-1\" (click)=\"decWeek();\">Previous</button>\r\n    <span class=\"col-lg-3\"></span>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">Go to week:</span>\r\n        <input type=\"number\" class=\"form-control weekInput\" placeholder=\"0\" id=\"weekInput\" aria-label=\"Number\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"goToWeek();\">Go!</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <span class=\"col-lg-3\"></span>\r\n    <button class=\"btn btn-success pull-right col-lg-1\" (click)=\"incWeek();\">Next</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project-table/project-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_projects2__ = __webpack_require__("../../../../../src/app/mockdata/mock-projects2.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectTableComponent = (function () {
    function ProjectTableComponent() {
        this.projects = __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_projects2__["a" /* PROJECTS2 */];
        this.week = 1;
    }
    ProjectTableComponent.prototype.ngOnInit = function () { };
    ProjectTableComponent.prototype.toggleCollapse = function (id) {
        var state = document.getElementById('collapse' + id).style.display;
        if (state === 'none') {
            document.getElementById('collapse' + id).style.display = 'table-row';
            document.getElementById('collapseIcon' + id).className = 'fa fa-arrow-up';
        }
        else {
            document.getElementById('collapse' + id).style.display = 'none';
            document.getElementById('collapseIcon' + id).className =
                'fa fa-arrow-down';
        }
    };
    ProjectTableComponent.prototype.setBackgroundColor = function (plannedhours, maxhours) {
        if (maxhours > plannedhours) {
            return 'table-danger';
        }
        else if (maxhours === plannedhours) {
            return 'table-warning';
        }
        return 'table-success';
    };
    ProjectTableComponent.prototype.showMessage = function () {
        alert('Callback Test');
    };
    ProjectTableComponent.prototype.incWeek = function () {
        if (this.week < 52) {
            this.week += 1;
        }
    };
    ProjectTableComponent.prototype.decWeek = function () {
        if (this.week > 1) {
            this.week -= 1;
        }
    };
    ProjectTableComponent.prototype.incSkill = function (skill) {
        skill.count += 1;
    };
    ProjectTableComponent.prototype.decSkill = function (skill, skills) {
        if (skill.count > 1) {
            skill.count -= 1;
        }
        else {
            var index = skills.indexOf(skill);
            skills.splice(index, 1);
        }
    };
    ProjectTableComponent.prototype.goToWeek = function () {
        var inputValue = parseInt(document.getElementById('weekInput').value, 0);
        if (inputValue >= 49) {
            this.week = 49;
            return;
        }
        else if (inputValue <= 1) {
            this.week = 1;
            return;
        }
        this.week = inputValue;
        document.getElementById('weekInput').value = '';
    };
    ProjectTableComponent.prototype.sumSkillCounts = function (project, number) {
        var dif = number - 2;
        var sum = 0;
        for (var _i = 0, _a = project.calendar[0].weeks[this.week + dif].skills; _i < _a.length; _i++) {
            var skill = _a[_i];
            sum += skill.count;
        }
        return sum;
    };
    ProjectTableComponent.prototype.sumWeekCounts = function (project) {
        var sum = 0;
        for (var i = 0; i < project.calendar[0].weeks.length; i++) {
            for (var _i = 0, _a = project.calendar[0].weeks[i].skills; _i < _a.length; _i++) {
                var skill = _a[_i];
                sum += skill.count;
            }
        }
        return sum;
    };
    ProjectTableComponent.prototype.addResource = function (skills, id1, id2) {
        var temp = document.getElementById('input' + id1 + id2).value;
        if (temp !== '') {
            skills.push({ count: 1, name: temp });
            document.getElementById('input' + id1 + id2).value =
                '';
        }
    };
    return ProjectTableComponent;
}());
ProjectTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-table',
        template: __webpack_require__("../../../../../src/app/components/project-table/project-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-table/project-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectTableComponent);

//# sourceMappingURL=project-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/resource-table/resource-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a i {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resource-table/resource-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th class=\"text-center\" scope=\"col\">Name</th>\r\n          <th class=\"text-center\" scope=\"col\">Company</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week}}. week</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week + 1}}. week</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week + 2}}. week</th>\r\n          <th class=\"text-center\" scope=\"col\">{{week + 3}}. week</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let resourceEl of resources; let i = index;\">\r\n          <tr [ngClass]=\"setBackgroundColor(sumHoursMax(resourceEl), sumHoursCurrent(resourceEl))\">\r\n            <th scope=\"row\" (click)=\"toggleCollapse(i)\">{{ resourceEl.name }}\r\n              <i id=\"collapseIcon{{i}}\" class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\r\n            </th>\r\n            <td class=\"text-center\">{{ resourceEl.firstname }}</td>\r\n            <td class=\"text-center\">{{ resourceEl.company }}</td>\r\n            <td class=\"text-center\">{{ resourceEl.calendar[0].weeks[week - 1].max }}</td>\r\n            <td class=\"text-center\">{{ resourceEl.calendar[0].weeks[week].max }}</td>\r\n            <td class=\"text-center\">{{ resourceEl.calendar[0].weeks[week + 1].max }}</td>\r\n            <td class=\"text-center\">{{ resourceEl.calendar[0].weeks[week + 2].max }}</td>\r\n          </tr>\r\n          <tr class=\"table\" id=\"collapse{{i}}\" style=\"display: none\">\r\n            <td colspan=\"2\">\r\n              <div>E-mail: {{ resourceEl.email }}</div>\r\n              <div>Phone number: {{ resourceEl.phone }}</div>\r\n              <div>Salary: {{ resourceEl.salary }}</div>\r\n            </td>\r\n            <td colspan=\"1\">\r\n              <div>Skills: {{ resourceEl.skills }}</div>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <a (click)=\"decHours(resourceEl.calendar[0].weeks[week - 1]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <span class=\"badge badge-pill badge-primary\">{{ resourceEl.calendar[0].weeks[week - 1].current }}</span>\r\n              <a (click)=\"incHours(resourceEl.calendar[0].weeks[week - 1]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <a (click)=\"decHours(resourceEl.calendar[0].weeks[week]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <span class=\"badge badge-pill badge-primary\">{{ resourceEl.calendar[0].weeks[week].current }}</span>\r\n              <a (click)=\"incHours(resourceEl.calendar[0].weeks[week]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <a (click)=\"decHours(resourceEl.calendar[0].weeks[week + 1]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <span class=\"badge badge-pill badge-primary\">{{ resourceEl.calendar[0].weeks[week + 1].current }}</span>\r\n              <a (click)=\"incHours(resourceEl.calendar[0].weeks[week + 1]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <a (click)=\"decHours(resourceEl.calendar[0].weeks[week + 2]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n              <span class=\"badge badge-pill badge-primary\">{{ resourceEl.calendar[0].weeks[week + 2].current }}</span>\r\n              <a (click)=\"incHours(resourceEl.calendar[0].weeks[week + 2]);\" class=\"badge badge-secondary\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n\r\n\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-success col-lg-1\" (click)=\"decWeek();\">Previous</button>\r\n    <span class=\"col-lg-3\"></span>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">Go to week:</span>\r\n        <input type=\"number\" class=\"form-control weekInput\" placeholder=\"0\" id=\"weekInput\" aria-label=\"Number\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"goToWeek();\">Go!</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <span class=\"col-lg-3\"></span>\r\n    <button class=\"btn btn-success pull-right col-lg-1\" (click)=\"incWeek();\">Next</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/resource-table/resource-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_resources__ = __webpack_require__("../../../../../src/app/mockdata/mock-resources.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourceTableComponent = (function () {
    function ResourceTableComponent() {
        this.resources = __WEBPACK_IMPORTED_MODULE_1__mockdata_mock_resources__["a" /* RESOURCES */];
        this.skills = [
            {
                name: 'available',
                number: 30
            }
        ];
        this.week = 1;
    }
    ResourceTableComponent.prototype.ngOnInit = function () {
    };
    ResourceTableComponent.prototype.toggleCollapse = function (id) {
        var state = document.getElementById('collapse' + id).style.display;
        if (state === 'none') {
            document.getElementById('collapse' + id).style.display = 'table-row';
            document.getElementById('collapseIcon' + id).className = 'fa fa-arrow-up';
        }
        else {
            document.getElementById('collapse' + id).style.display = 'none';
            document.getElementById('collapseIcon' + id).className = 'fa fa-arrow-down';
        }
    };
    ResourceTableComponent.prototype.setBackgroundColor = function (max, current) {
        // TODO: only for testing, real algorythm needs to be implemented
        if (current > max) {
            return 'table-danger';
        }
        else if (current === max) {
            return 'table-warning';
        }
        return 'table-success';
    };
    ResourceTableComponent.prototype.incWeek = function () {
        if (this.week < 52) {
            this.week += 1;
        }
    };
    ResourceTableComponent.prototype.decWeek = function () {
        if (this.week > 1) {
            this.week -= 1;
        }
    };
    ResourceTableComponent.prototype.goToWeek = function () {
        var inputValue = parseInt(document.getElementById('weekInput').value, 0);
        if (inputValue >= 49) {
            this.week = 49;
            return;
        }
        else if (inputValue <= 1) {
            this.week = 1;
            return;
        }
        this.week = inputValue;
    };
    ResourceTableComponent.prototype.incHours = function (week) {
        week.current += 1;
    };
    ResourceTableComponent.prototype.decHours = function (week) {
        if (week.current > 0) {
            week.current -= 1;
        }
    };
    ResourceTableComponent.prototype.sumHoursMax = function (resource) {
        var sum = 0;
        for (var _i = 0, _a = resource.calendar[0].weeks; _i < _a.length; _i++) {
            var week = _a[_i];
            sum += week.max;
        }
        return sum;
    };
    ResourceTableComponent.prototype.sumHoursCurrent = function (resource) {
        var sum = 0;
        for (var _i = 0, _a = resource.calendar[0].weeks; _i < _a.length; _i++) {
            var week = _a[_i];
            sum += week.current;
        }
        return sum;
    };
    return ResourceTableComponent;
}());
ResourceTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-resource-table',
        template: __webpack_require__("../../../../../src/app/components/resource-table/resource-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/resource-table/resource-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResourceTableComponent);

//# sourceMappingURL=resource-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/mock-calendar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CALENDAR; });
var weeks = [];
for (var i = 1; i < 53; i++) {
    var tmp = { id: i, current: 0, max: 0 };
    weeks.push(tmp);
}
var CALENDAR = [{ id: 2017, weeks: weeks }];
//# sourceMappingURL=mock-calendar.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/mock-projects2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROJECTS2; });
var PROJECTS2 = [
    {
        id: 0,
        name: 'My little project 1',
        projectleader: 'Angela Merkel',
        company: 'EU',
        risk: 20,
        startdate: 20120212,
        duedate: 20130212,
        plannedhours: 80,
        currenthours: 0,
        budget: 2506600,
        calendar: [
            {
                id: 2017,
                weeks: [
                    {
                        id: 1,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 5, name: 'C#' }
                        ],
                        current: 0,
                        required: 20
                    },
                    {
                        id: 2,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 4, name: 'Java' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 40
                    },
                    {
                        id: 3,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'C#' },
                            { count: 4, name: 'Node' },
                            { count: 7, name: 'Angular' }
                        ],
                        current: 0,
                        required: 30
                    },
                    {
                        id: 4,
                        skills: [
                            { count: 4, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 5,
                        skills: [{ count: 2, name: 'C#' }, { count: 2, name: 'Node' }],
                        current: 0,
                        required: 50
                    },
                    {
                        id: 6,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 50
                    },
                    {
                        id: 7,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 80
                    },
                    {
                        id: 8,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 90
                    },
                    {
                        id: 9,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 70
                    },
                    {
                        id: 10,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 40
                    },
                    {
                        id: 11,
                        skills: [{ count: 2, name: 'C#' }, { count: 2, name: 'Node' }],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 12,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 10
                    }
                ]
            }
        ],
        skills: [],
        resources: []
    },
    {
        id: 1,
        name: 'My little project 2',
        projectleader: 'Mészáros Lorinc',
        company: 'EU',
        risk: 30,
        startdate: 20120212,
        duedate: 20130212,
        plannedhours: 100,
        currenthours: 0,
        budget: 2506600,
        calendar: [
            {
                id: 2017,
                weeks: [
                    {
                        id: 1,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 1, name: 'J' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 2,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 40
                    },
                    {
                        id: 3,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 30
                    },
                    {
                        id: 4,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 5,
                        skills: [{ count: 2, name: 'C#' }, { count: 2, name: 'Java' }],
                        current: 0,
                        required: 20
                    },
                    {
                        id: 6,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'Angular' }
                        ],
                        current: 0,
                        required: 70
                    },
                    {
                        id: 7,
                        skills: [
                            { count: 1, name: 'B' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'F#' }
                        ],
                        current: 0,
                        required: 5
                    },
                    {
                        id: 8,
                        skills: [{ count: 1, name: 'C' }, { count: 2, name: 'Angular' }],
                        current: 0,
                        required: 90
                    },
                    {
                        id: 9,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'B' },
                            { count: 2, name: 'Java' }
                        ],
                        current: 0,
                        required: 50
                    },
                    {
                        id: 10,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 11,
                        skills: [{ count: 2, name: 'C#' }, { count: 2, name: 'Node' }],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 12,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 10
                    }
                ]
            }
        ],
        skills: [],
        resources: []
    },
    {
        id: 2,
        name: 'My little project 3',
        projectleader: 'Simicska Lajos',
        company: 'EU',
        risk: 20,
        startdate: 20120212,
        duedate: 20130212,
        plannedhours: 50,
        currenthours: 0,
        budget: 2506600,
        calendar: [
            {
                id: 2017,
                weeks: [
                    {
                        id: 1,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 5, name: 'C#' }
                        ],
                        current: 0,
                        required: 20
                    },
                    {
                        id: 2,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 4, name: 'Java' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 40
                    },
                    {
                        id: 3,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'C#' },
                            { count: 4, name: 'Node' },
                            { count: 7, name: 'Angular' }
                        ],
                        current: 0,
                        required: 30
                    },
                    {
                        id: 4,
                        skills: [
                            { count: 4, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 5,
                        skills: [{ count: 2, name: 'C#' }, { count: 2, name: 'Node' }],
                        current: 0,
                        required: 50
                    },
                    {
                        id: 6,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 50
                    },
                    {
                        id: 7,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 80
                    },
                    {
                        id: 8,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 90
                    },
                    {
                        id: 9,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 70
                    },
                    {
                        id: 10,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' }
                        ],
                        current: 0,
                        required: 40
                    },
                    {
                        id: 11,
                        skills: [{ count: 2, name: 'C#' }, { count: 2, name: 'Node' }],
                        current: 0,
                        required: 10
                    },
                    {
                        id: 12,
                        skills: [
                            { count: 1, name: 'C' },
                            { count: 2, name: 'Java' },
                            { count: 2, name: 'C#' },
                            { count: 2, name: 'Node' }
                        ],
                        current: 0,
                        required: 10
                    }
                ]
            }
        ],
        skills: [],
        resources: []
    }
];
//# sourceMappingURL=mock-projects2.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/mock-resources.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESOURCES; });
var RESOURCES = [
    {
        id: 0,
        firstname: 'Csaba',
        lastname: 'Kigyosi',
        email: 'asdad@gmail.com',
        salary: 2000,
        company: 'BME',
        phone: 2222,
        occupacity: [],
        skills: ['JavaScript', 'C'],
        calendar: [
            {
                id: 2017, weeks: [
                    {
                        id: 1,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 2,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 3,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 4,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 5,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 6,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 7,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 8,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 9,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 10,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 11,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 12,
                        max: 40,
                        current: 40
                    }
                ]
            }
        ],
    },
    {
        id: 1,
        firstname: 'Jolan',
        lastname: 'Megyei',
        email: 'asdad@gmail.com',
        salary: 100,
        company: 'UFO',
        phone: 233,
        occupacity: [],
        skills: ['Nothing Really'],
        calendar: [
            {
                id: 2017, weeks: [
                    {
                        id: 1,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 2,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 3,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 4,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 5,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 6,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 7,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 8,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 9,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 10,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 11,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 12,
                        max: 40,
                        current: 40
                    }
                ]
            }
        ],
    },
    {
        id: 2,
        firstname: 'Jancsika',
        lastname: 'Kiss',
        email: 'asdad@gmail.com',
        salary: 2000,
        company: 'ELTE',
        phone: 6666,
        occupacity: [],
        skills: ['C++'],
        calendar: [
            {
                id: 2017, weeks: [
                    {
                        id: 1,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 2,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 3,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 4,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 5,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 6,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 7,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 8,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 9,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 10,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 11,
                        max: 40,
                        current: 40
                    },
                    {
                        id: 12,
                        max: 40,
                        current: 40
                    }
                ]
            }
        ],
    }
];
//# sourceMappingURL=mock-resources.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
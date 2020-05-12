function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/data.json */
    "./src/assets/data.json");

    var _assets_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/data.json */
    "./src/assets/data.json", 1);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_5_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", task_r1.HYPERLINK, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.HYPERLINK_TEXT);
      }
    }

    function AppComponent_div_5_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.USER_STORY.AS_A);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.USER_STORY.I_WANT);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.USER_STORY.SO_THAT);
      }
    }

    function AppComponent_div_5_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/CameronJett/cupcake-clicker-ui/commit/", task_r1.GITHUB_COMMIT, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Github commit: ", task_r1.GITHUB_COMMIT, "");
      }
    }

    function AppComponent_div_5_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/CameronJett/cupcake-clicker-ui/commit/", task_r1.GITHUB_COMMIT, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Github commit: ", task_r1.GITHUB_SECOND_COMMIT, "");
      }
    }

    function AppComponent_div_5_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var task_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", task_r1.IMAGE, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_5_div_6_Template, 3, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_5_div_7_Template, 8, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_5_a_9_Template, 2, 2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_5_a_12_Template, 2, 2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_5_img_13_Template, 1, 1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.HEADER);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.DETAILS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.HYPERLINK);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.USER_STORY);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.GITHUB_COMMIT);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.GITHUB_SECOND_COMMIT);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.IMAGE);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'cupcake-clicker-tutorial';
        this.json_data = [];
        this.json_data = _assets_data_json__WEBPACK_IMPORTED_MODULE_1__.TASKS;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [["class", "task", 4, "ngFor", "ngForOf"], [1, "task"], [1, "task-spacer"], [4, "ngIf"], ["class", "user-story", 4, "ngIf"], [1, "github-link"], [3, "href", 4, "ngIf"], [3, "src", 4, "ngIf"], [3, "href"], [1, "user-story"], [1, "user-spacer"], [3, "src"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CUPCAKE CLICKER TUTORIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a step by step tutorial on creating a frontend and backend for a simple cupcake clicking game with users and a leaderboard. Make sure to follow TDD for this project. If you are having issues some steps are given angular references, and every step has a link to a Github commit for reference to show all changes on that step, but for best effect try and solve the issues on your own first..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 14, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.json_data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.user-story[_ngcontent-%COMP%] {\n    background-color: rgb(173, 173, 173);\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n\n.task[_ngcontent-%COMP%] {\n    border:.1rem solid rgb(173, 173, 173);\n    margin-bottom:.4rem;\n}\n\n.task-spacer[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n\n.github-link[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    text-align: right;\n}\n\nimg[_ngcontent-%COMP%] {\n    margin-top: -2rem;\n}\n\n.user-spacer[_ngcontent-%COMP%] {\n    margin: .5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1zdG9yeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMTczLCAxNzMpO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnRhc2sge1xuICAgIGJvcmRlcjouMXJlbSBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XG4gICAgbWFyZ2luLWJvdHRvbTouNHJlbTtcbn1cblxuLnRhc2stc3BhY2VyIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5naXRodWItbGluayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cblxuLnVzZXItc3BhY2VyIHtcbiAgICBtYXJnaW46IC41cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/assets/data.json":
  /*!******************************!*\
    !*** ./src/assets/data.json ***!
    \******************************/

  /*! exports provided: TASKS, default */

  /***/
  function srcAssetsDataJson(module) {
    module.exports = JSON.parse("{\"TASKS\":[{\"HEADER\":\"Initialize your project.\",\"DETAILS\":\"Follow the linked guide to install angular, generate a project with routing, and get the application running.\",\"HYPERLINK_TEXT\":\"Angular set-up\",\"HYPERLINK\":\"https://angular.io/guide/setup-local\",\"GITHUB_COMMIT\":\"8f018ecafeb91b3c625114c117535475280d40a5\"},{\"HEADER\":\"Create the cupcake page.\",\"DETAILS\":\"Create a folder for components in the app folder, and generate a component for the cupcake page by using the CLI command inside the components folder.\\nDisplay image of a cupcake.\\nSetup router to land on the cupcake component by placing router-outlet in the app.component.html file.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to view a cupcake on the cupcake page\",\"SO_THAT\":\"So that I can have something to click on\"},\"HYPERLINK_TEXT\":\"Angular routing\",\"HYPERLINK\":\"https://angular.io/guide/router\",\"IMAGE\":\"../assets/cupcake.png\",\"GITHUB_COMMIT\":\"d0f1d03bbfeafaf0da66b00d50fa8c04ef902f40\"},{\"HEADER\":\"Create a counter and increment on cupcake click\",\"DETAILS\":\"Create function for incrementing clicked count.\\nDisplay count on page.\\nConnect click of the cupcake to incrementing the count.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to be able to click on the cupcake and view my current score\",\"SO_THAT\":\"So that I can see my score and my score can go up\"},\"HYPERLINK_TEXT\":\"Testing click events\",\"HYPERLINK\":\"https://stackoverflow.com/questions/40093013/unit-testing-click-event-in-angular\",\"GITHUB_COMMIT\":\"cb3002f2894623b974b43ffa3247ad9070fe45b2\"},{\"HEADER\":\"Create a login page for users to log in.\",\"DETAILS\":\"Generate Login page.\\nCreate form group for user name, a button to log in, and a button for creating a user.\\nOn click buttons route to cupcake page.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to click on log in or create user\",\"SO_THAT\":\"So that I can go to the cupcake clicking page\"},\"HYPERLINK_TEXT\":\"Angular Form Groups\",\"HYPERLINK\":\"https://appdividend.com/2019/12/17/angular-formgroup-example-tutorial-from-scratch/\",\"GITHUB_COMMIT\":\"8cabdf8c7dcc551095363cf7cd8f49aaceb79092\"},{\"HEADER\":\"When clicking the login button make a GET call to the backend.\",\"DETAILS\":\"Create a service for making http requests.\\nWe will expecting a User object containing the username and click count to be returned for now.\\nWrite a test to mock out the call to the backend, you'll need to spy on the http call and return a mock user object.\\nCreate a function for making the get call.\\nCall the function from the login page and route to the cupcake page after successful call.\\nStarting from this point actually clicking the button will fail and not route anymore, but with the http tests we can infer that it will work once we have a backend up and running and returning the data we expect.\\n**In my commit the test for calling the service function on the login component is incorrect, resolved in next commit.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to enter my user name and click on the log in button\",\"SO_THAT\":\"So that I can get my data and go to the cupcake clicking page\"},\"HYPERLINK_TEXT\":\"HTTP service\",\"HYPERLINK\":\"https://www.techiediaries.com/angular/angular-httpclient-9-8-service-api-calls-and-fetching-data/\",\"GITHUB_COMMIT\":\"e4124919567ce850ef211488a5acfd88991c2144\"},{\"HEADER\":\"When clicking the new user button make a POST call to the backend.\",\"DETAILS\":\"Create a service function for making POST request.\\nWe will expect a User containing the username and 0 click count to be returned.\\nRepeat what was done in the last step for the most part not forgetting the tests in service and login page.\\nCall the function from the login page and route to the cupcake page after successful call.\\nI also made sure that the user name form had to not be empty to be valid.\\n**Extra: I also set up the form buttons to be disabled when the user has not put in any characters into the username box for this commit.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to enter my user name and click on the new user button\",\"SO_THAT\":\"So that I can create my user and go to the cupcake clicking page\"},\"GITHUB_COMMIT\":\"d3199d8d91b983e86ffaca7db8cd4ff200535ef3\"},{\"HEADER\":\"Setup Spring backend.\",\"DETAILS\":\"Go to start.spring.io and generate your Spring backend.\\nAdd dependencies for Web, JPA, H2, and Lombok.\\nRun the server and open localhost:8080, you should see a whitelabel error page because we have not set up a rest endpoint yet.\",\"HYPERLINK_TEXT\":\"Spring guide\",\"HYPERLINK\":\"https://spring.io/guides/tutorials/rest/\",\"GITHUB_COMMIT\":\"9c313d6eed27149347a53b77b92eaacb255efe91\"},{\"HEADER\":\"Create GET api endpoint.\",\"DETAILS\":\"Create a Controller and Model folder.\\nCreate a UserController with a RequestMapping for our /username endpoint.\\nCreate a User model with our name and click count.\\nReturn a simple mock user from the endpoint.\\nNow when you run the backend you can go to the frontend, put in a name and click login, and you should route to the cupcake page.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to be able to put in my name and click login\",\"SO_THAT\":\"So that I can be logged in and I can go to the cupcake clicking page as my user\"},\"HYPERLINK_TEXT\":\"Http endpoint testing\",\"HYPERLINK\":\"https://spring.io/guides/gs/testing-web/\",\"GITHUB_COMMIT\":\"2c55d97d88403984bdd3f7c8dae55dfffe208abb\"},{\"HEADER\":\"Create POST api endpoint.\",\"DETAILS\":\"Create a POST endpoint on the Controller taking in our new User as the RequestBody.\\nReturn a simple mock user from the endpoint.\\nRun the backend and when you click on create user, and you should route to the cupcake page.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to be able to put in my name and click create a new user\",\"SO_THAT\":\"So that I can go to the cupcake clicking page as a new user\"},\"GITHUB_COMMIT\":\"983c66e004fe6a6ef57fd1d13303992610046a63\"},{\"HEADER\":\"Create a service to return our mock data.\",\"DETAILS\":\"We will want to separate our Controller and our data logic, and we will do that by creating a User service.\\nCreate two functions in our service for getting and creating.\\nIn our controller tests mock out the service with return values so the tests are not dependent on each other.\",\"HYPERLINK_TEXT\":\"Services\",\"HYPERLINK\":\"https://www.tutorialspoint.com/spring_boot/spring_boot_service_components.htm\",\"GITHUB_COMMIT\":\"69ced28dd9cf8edbef6a9afe426aa1efb79c5590\"},{\"HEADER\":\"Create a frontend service for sharing our user data between pages.\",\"DETAILS\":\"Back to the UI side, when we get our data on the login page and route to the cupcake page we will want to show that data if the user had saved clicks from the backend.\\nCreate a User service on the frontend and functions to get our data.\\nDisplay the count we have gotten from the backend on the cupcake page.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to be able to see my stored clicks on the cupcake page\",\"SO_THAT\":\"So that I can continue to add to my click score\"},\"HYPERLINK_TEXT\":\"Managing Data\",\"HYPERLINK\":\"https://angular.io/start/start-data\",\"GITHUB_COMMIT\":\"14a8164997393ced1343abc2fd28bb5870dd7bd2\"},{\"HEADER\":\"Create a save button, and save data endpoint.\",\"DETAILS\":\"Create a button on the cupcake page.\\nCreate a service call to the backend.\\nCreate a Rest PUT endpoint for taking in the new user data.\\nShow a notification that the save went through.\\n**In my commit this is done as a POST, but I changed it to a PUT in the next commit.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to click the save button and see a notification\",\"SO_THAT\":\"So that my click progress will be saved\"},\"GITHUB_COMMIT\":\"b66b561d2aa2e8cea9caf4f64c677064270d4cec\",\"GITHUB_SECOND_COMMIT\":\"f100ee249b12089d29897c6277794e1286dac318\"},{\"HEADER\":\"Create a delete button, and delete data endpoint.\",\"DETAILS\":\"Create a button on the cupcake page.\\nCreate a service call to the backend.\\nCreate a Rest endpoint for deleting the current user.\\nRoute back to the login page and show that the delete was successful.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to click the delete button and see a notification\",\"SO_THAT\":\"So that my user data will be deleted\"},\"GITHUB_COMMIT\":\"4efa4fb0265f2ef736936c1b2096c20ef445c5c8\",\"GITHUB_SECOND_COMMIT\":\"25d723cf6603b22f025cadcf026fbbc42c37206a\"},{\"HEADER\":\"Create an H2 database set up to persist our user data and have the get endpoint return a user in the DB.\",\"DETAILS\":\"Setup the H2 database and a few mock rows with a User table containing id, name and clicks.\\nOpen the H2 console with the url and JDBC URL given in the spring output (Will be something like localhost:8080/h2_console, jdbc:h2:mem:testdb) and run select * on the USER table to see your base data there.\\nRefactor the User to have an ID on the front and back end.\\nCreate a UserRepository and update the getUserByName in our user service to return the user from the database.\\nFor now return null if the user doesn't exist, we will deal with error handling later.\",\"HYPERLINK_TEXT\":\"H2 Database Integration\",\"HYPERLINK\":\"https://stackabuse.com/integrating-h2-database-with-spring-boot/\",\"GITHUB_COMMIT\":\"7ec32852d57fb7312ddc3fe7bb3b64d45b96def5\",\"GITHUB_SECOND_COMMIT\":\"f2f1fc56974bbc9f7ac1be39e0e12fc3304d834d\"},{\"HEADER\":\"Implement our POST, PUT, and DELETE methods\",\"DETAILS\":\"On POST create a new user in the DB.\\nOn PUT update the given user's click count.\\nOn DELETE delete the user from the DB.\\n At this point all the CRUD operations are finished and we have a basic working App.\",\"GITHUB_COMMIT\":\"10289f955a6730103b5debfa6bd1f9fdee775514\"},{\"HEADER\":\"Create a leaderboard page.\",\"DETAILS\":\"Create a new leaderboard page, a button on the cupcake page to route to it.\\nCreate a GET request to get all users and clicks from the backend.\\nUse an ngFor to list all users in descending point order.\",\"USER_STORY\":{\"AS_A\":\"As a user,\",\"I_WANT\":\"I want to click on the leaderboard button and go to the leaderboard page,\",\"SO_THAT\":\"So that I can see where my score ranks among everyone else.\"},\"HYPERLINK_TEXT\":\"For loops in angular\",\"HYPERLINK\":\"https://angular.io/api/common/NgForOf\",\"IMAGE\":\"\",\"GITHUB_COMMIT\":\"5726552954b0138ccd011769e15a3a8d220e589c\",\"GITHUB_SECOND_COMMIT\":\"7a4b9fe9c88d506a735d5ab9f96adc5adcd90d6e\"}]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/cameron/Projects/Angular/CupcakeClicker/Tutorial Site/cupcake-clicker-tutorial/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ApiService.prototype.get = function (path, params) {
        return this.http.get(this.API_URL + path, { params: params });
    };
    ApiService.prototype.post = function (path, data) {
        return this.http.post(this.API_URL + path, data);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <app-header></app-header>\r\n    <div class=\"page__container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.hiddenClassName = 'hidden';
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        this.header = document.getElementsByClassName('header')['0'];
        this.footer = document.getElementsByClassName('footer')['0'];
        setTimeout(function () { self.initWidgets(); }, 1500);
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.hideOnScroll();
            this.hideOnDoubleTap();
        }
    };
    AppComponent.prototype.initWidgets = function () {
        this.removeClass(this.header, this.hiddenClassName);
        this.removeClass(this.footer, this.hiddenClassName);
    };
    AppComponent.prototype.removeClass = function (element, clName) {
        if (element.classList)
            element.classList.remove(clName);
        else
            element.className = element.clName.replace(new RegExp('(^|\\b)' + clName.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    AppComponent.prototype.addClass = function (element, clName) {
        if (element.classList)
            element.classList.add(clName);
        else
            element.className += ' ' + clName;
    };
    AppComponent.prototype.hideOnDoubleTap = function () {
        var self = this;
        var isHidden = false;
        var bodyElement = document.getElementsByTagName("body")[0];
        bodyElement.onclick = function () {
            doubleTapHandler();
        };
        var myLatestTap;
        function doubleTapHandler() {
            var now = new Date().getTime();
            var timesince = now - myLatestTap;
            if ((timesince < 400) && (timesince > 0)) {
                if (self.header.classList.contains(self.hiddenClassName) && self.footer.classList.contains(self.hiddenClassName)) {
                    self.removeClass(self.header, self.hiddenClassName);
                    self.removeClass(self.footer, self.hiddenClassName);
                }
                else {
                    self.addClass(self.header, self.hiddenClassName);
                    self.addClass(self.footer, self.hiddenClassName);
                }
            }
            myLatestTap = new Date().getTime();
        }
    };
    AppComponent.prototype.hideOnScroll = function () {
        var self = this;
        var didScroll;
        var delta = 10;
        var lastPosition = 0;
        window.onscroll = function () {
            didScroll = true;
        };
        setInterval(function () {
            if (didScroll) {
                handleScroll();
                didScroll = false;
            }
        }, 200);
        function handleScroll() {
            if (window.pageYOffset > lastPosition + delta) {
                self.removeClass(self.footer, self.hiddenClassName);
                self.addClass(self.header, self.hiddenClassName);
            }
            else if (window.pageYOffset < lastPosition - delta) {
                self.removeClass(self.header, self.hiddenClassName);
                self.addClass(self.footer, self.hiddenClassName);
            }
            lastPosition = window.pageYOffset;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _blog_blog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.module */ "./src/app/blog/blog.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                _blog_blog_module__WEBPACK_IMPORTED_MODULE_6__["BlogModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _blog_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/comments/comments.component */ "./src/app/blog/comments/comments.component.ts");
/* harmony import */ var _blog_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog/posts/posts.component */ "./src/app/blog/posts/posts.component.ts");
/* harmony import */ var _blog_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/users/users.component */ "./src/app/blog/users/users.component.ts");



var ROUTES = [
    {
        path: '',
        component: _blog_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'users',
        component: _blog_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'posts/:id',
        component: _blog_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'comments/:id',
        component: _blog_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__["CommentsComponent"],
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];


/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/blog/users/users.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/blog/posts/posts.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/blog/comments/comments.component.ts");
/* harmony import */ var _users_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/user-item/user-item.component */ "./src/app/blog/users/user-item/user-item.component.ts");
/* harmony import */ var _posts_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/post-item/post-item.component */ "./src/app/blog/posts/post-item/post-item.component.ts");
/* harmony import */ var _comments_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/comment-item/comment-item.component */ "./src/app/blog/comments/comment-item/comment-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"], _users_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_7__["UserItemComponent"], _posts_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_8__["PostItemComponent"], _comments_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_9__["CommentItemComponent"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ }),

/***/ "./src/app/blog/comments/comment-item/comment-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/blog/comments/comment-item/comment-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-item\">\r\n  <div class=\"comment-item__comment-content\">\r\n      <div><b>{{commentName}}</b></div>\r\n      <p>{{commentBody}}</p>\r\n      <div><a href=\"mailto:{{commentEmail}}\">{{commentEmail}}</a></div>\r\n  </div>\r\n  <a class=\"comment-item__show-btn button-m\" routerLink=\"/users\">Back to users</a>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/comments/comment-item/comment-item.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/blog/comments/comment-item/comment-item.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-item {\n  border: 1px solid #003b46;\n  padding: 10px 20px;\n  transition: background-color 0.3s; }\n  .comment-item:hover {\n    background-color: rgba(7, 87, 91, 0.1); }\n  @media (max-width: 479px) {\n    .comment-item {\n      text-align: center; } }\n  .comment-item__comment-content {\n  margin: 0 0 20px;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/blog/comments/comment-item/comment-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/blog/comments/comment-item/comment-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentItemComponent", function() { return CommentItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentItemComponent = /** @class */ (function () {
    function CommentItemComponent() {
    }
    CommentItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('commentName'),
        __metadata("design:type", Object)
    ], CommentItemComponent.prototype, "commentName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('commentEmail'),
        __metadata("design:type", Object)
    ], CommentItemComponent.prototype, "commentEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('commentBody'),
        __metadata("design:type", Object)
    ], CommentItemComponent.prototype, "commentBody", void 0);
    CommentItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-item',
            template: __webpack_require__(/*! ./comment-item.component.html */ "./src/app/blog/comments/comment-item/comment-item.component.html"),
            styles: [__webpack_require__(/*! ./comment-item.component.scss */ "./src/app/blog/comments/comment-item/comment-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentItemComponent);
    return CommentItemComponent;
}());



/***/ }),

/***/ "./src/app/blog/comments/comments.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/comments/comments.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments-list\">\r\n  <h1 class=\"comments-list__heading\">Comments</h1>\r\n  <ul class=\"comments-list__list\">\r\n    <div class=\"comments-list__item\" *ngFor=\"let comment of comments\">\r\n      <app-comment-item \r\n        [commentName]=\"comment.name\" \r\n        [commentEmail]=\"comment.email\"\r\n        [commentBody]=\"comment.body\"\r\n      ></app-comment-item>\r\n    </div>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/comments/comments.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/blog/comments/comments.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments-list {\n  padding: 20px 0; }\n\n.comments-list__heading {\n  margin: 0 0 20px; }\n\n.comments-list__list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.comments-list__item {\n  margin: 0 0 15px; }\n\n.comments-list__item:last-of-type {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/blog/comments/comments.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/comments/comments.component.ts ***!
  \*****************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(api, activatedRoute) {
        this.api = api;
        this.activatedRoute = activatedRoute;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postId = this.activatedRoute.snapshot.params.id;
        this.api.get('/comments?postId=' + this.postId).subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/blog/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/blog/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/blog/posts/post-item/post-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/blog/posts/post-item/post-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-item\">\r\n  <div class=\"post-item__post-content\">\r\n      <div><b>{{postTitle}}</b></div>\r\n      <p>{{postBody}}</p>\r\n  </div>\r\n  <a class=\"post-item__show-btn button-m\" [routerLink]=\"['/comments', postId]\">Show comments</a>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/posts/post-item/post-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/blog/posts/post-item/post-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-item {\n  border: 1px solid #003b46;\n  padding: 10px 20px;\n  transition: background-color 0.3s; }\n  .post-item:hover {\n    background-color: rgba(7, 87, 91, 0.1); }\n  @media (max-width: 479px) {\n    .post-item {\n      text-align: center; } }\n  .post-item__post-content {\n  margin: 0 0 20px;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/blog/posts/post-item/post-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog/posts/post-item/post-item.component.ts ***!
  \*************************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostItemComponent = /** @class */ (function () {
    function PostItemComponent() {
    }
    PostItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('postTitle'),
        __metadata("design:type", Object)
    ], PostItemComponent.prototype, "postTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('postBody'),
        __metadata("design:type", Object)
    ], PostItemComponent.prototype, "postBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('postId'),
        __metadata("design:type", Object)
    ], PostItemComponent.prototype, "postId", void 0);
    PostItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-item',
            template: __webpack_require__(/*! ./post-item.component.html */ "./src/app/blog/posts/post-item/post-item.component.html"),
            styles: [__webpack_require__(/*! ./post-item.component.scss */ "./src/app/blog/posts/post-item/post-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostItemComponent);
    return PostItemComponent;
}());



/***/ }),

/***/ "./src/app/blog/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/blog/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posts-list\">\r\n  <h1 class=\"posts-list__heading\">Posts</h1>\r\n  <ul class=\"posts-list__list\">\r\n    <div class=\"posts-list__item\" *ngFor=\"let post of posts\">\r\n      <app-post-item \r\n        [postTitle]=\"post.title\" \r\n        [postBody]=\"post.body\"\r\n        [postId]=\"post.id\"\r\n      ></app-post-item>\r\n    </div>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/posts/posts.component.scss":
/*!*************************************************!*\
  !*** ./src/app/blog/posts/posts.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posts-list {\n  padding: 20px 0; }\n\n.posts-list__heading {\n  margin: 0 0 20px; }\n\n.posts-list__list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.posts-list__item {\n  margin: 0 0 15px; }\n\n.posts-list__item:last-of-type {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/blog/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/blog/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(api, activatedRoute) {
        this.api = api;
        this.activatedRoute = activatedRoute;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.activatedRoute.snapshot.params.id;
        this.api.get('/posts?userId=' + this.userId).subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/blog/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/blog/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/blog/users/user-item/user-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/blog/users/user-item/user-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-item\">\r\n    <div class=\"user-item__user-info\">\r\n        <div class=\"user-item__user-name\"><b>{{userName}}</b></div>\r\n        <div><a href=\"mailto:{{userEmail}}\">{{userEmail}}</a></div>\r\n        <div><a href=\"tel:+{{userPhoneProcessed}}\">{{userPhoneProcessed}}</a></div>\r\n        <div><a href=\"https://{{userWebsite}}\">{{userWebsite}}</a></div>\r\n    </div>\r\n    <a class=\"user-item__show-btn button-m\" [routerLink]=\"['/posts', userId]\">Show posts</a>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/users/user-item/user-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/blog/users/user-item/user-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-item {\n  border: 1px solid #003b46;\n  padding: 10px 20px;\n  transition: background-color 0.3s; }\n  .user-item:hover {\n    background-color: rgba(7, 87, 91, 0.1); }\n  @media (max-width: 479px) {\n    .user-item {\n      text-align: center; } }\n  .user-item__user-info {\n  margin: 0 0 20px; }\n  .user-item__user-name {\n  margin: 0 0 20px;\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/blog/users/user-item/user-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog/users/user-item/user-item.component.ts ***!
  \*************************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
        this.userPhoneProcessed = this.processPhone(this.userPhone);
    };
    UserItemComponent.prototype.processPhone = function (rawPhoneNumber) {
        var index = rawPhoneNumber.indexOf(" x");
        var processedPhoneNumber = rawPhoneNumber.slice(0, index).replace(/\D/g, '');
        return processedPhoneNumber;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userName'),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "userName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userEmail'),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "userEmail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userPhone'),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "userPhone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userWebsite'),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "userWebsite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userId'),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "userId", void 0);
    UserItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/blog/users/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.scss */ "./src/app/blog/users/user-item/user-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/blog/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/blog/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-list\">\r\n  <h1 class=\"users-list__heading\">Users</h1>\r\n  <ul class=\"users-list__list\">\r\n    <div class=\"users-list__item\" *ngFor=\"let user of users\">\r\n      <app-user-item \r\n        [userName]=\"user.name\" \r\n        [userEmail]=\"user.email\"\r\n        [userPhone]=\"user.phone\"\r\n        [userWebsite]=\"user.website\"\r\n        [userId]=\"user.id\"\r\n      ></app-user-item>\r\n    </div>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/users/users.component.scss":
/*!*************************************************!*\
  !*** ./src/app/blog/users/users.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-list {\n  padding: 20px 0; }\n\n.users-list__heading {\n  margin: 0 0 20px; }\n\n.users-list__list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.users-list__item {\n  margin: 0 0 15px; }\n\n.users-list__item:last-of-type {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/blog/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/blog/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(api) {
        this.api = api;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get('/users').subscribe(function (users) {
            _this.users = users;
            console.log(users);
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/blog/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/blog/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">footer</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #003b46;\n  color: #fff;\n  font-size: 20px;\n  position: fixed;\n  height: 50px;\n  width: 100%;\n  bottom: 0;\n  transition: bottom 0.3s;\n  padding: 10px;\n  text-align: center; }\n  .footer.hidden {\n    bottom: -50px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">header</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #003b46;\n  color: #fff;\n  font-size: 20px;\n  position: fixed;\n  height: 50px;\n  width: 100%;\n  top: 0;\n  transition: top 0.3s;\n  text-align: center;\n  padding: 10px; }\n  .header.hidden {\n    top: -50px; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://jsonplaceholder.typicode.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\My\Jelvix-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
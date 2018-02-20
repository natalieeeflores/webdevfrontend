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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #bf8fef;\n  opacity: 0.5;\n}\n\nli {\n  float: left;\n  display: block;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.row, #image, p, h1{\n\ttext-align: center;\n}\n\n.form-control {\n\twidth: 300px;\n\tdisplay: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nth {\n\tpadding: 10px;\n}\n\n#body {\n\tpadding: 100px;\n}\n\n.fileUpload {\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n\n.btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n}\n\n.container-fluid {\n\tmargin-top: 100px;\n}\n\n#headerElements, #updateInfo, #registration {\n\tbackground-color: #E2E3EA;\n\tpadding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet><router-outlet>\n"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_registration_form_registration_form_component__ = __webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/auth/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__article_edit_article_dialog_edit_article_dialog_component__ = __webpack_require__("../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__article_image_preview_image_preview_component__ = __webpack_require__("../../../../../src/app/article/image-preview/image-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_update_profile_pic_update_profile_pic_component__ = __webpack_require__("../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_registration_form_registration_form_component__["a" /* RegistrationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__auth_login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__article_edit_article_dialog_edit_article_dialog_component__["a" /* EditArticleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__article_image_preview_image_preview_component__["a" /* ImagePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_update_profile_pic_update_profile_pic_component__["a" /* UpdateProfilePicComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__["a" /* MatToolbarModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__article_edit_article_dialog_edit_article_dialog_component__["a" /* EditArticleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__article_image_preview_image_preview_component__["a" /* ImagePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_update_profile_pic_update_profile_pic_component__["a" /* UpdateProfilePicComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fileUpload {\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n\n#previewDiv, #commentDiv, #editDiv {\n  display: none;\n}\n\n.btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\nh6 {\n\topacity: 0.5;\n}\n\ntextarea {\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=newTextPost() #postForm=\"ngForm\">\n  <textarea class=\"form-control\" rows=\"4\" cols=\"50\"\n  [(ngModel)]=\"model.post\" name=\"post\" id=\"post\"\n  placeholder=\"Share your thoughts...\"\n  ></textarea><br>\n  <button type=\"submit\" class=\"btn\" id=\"postBtn\">Post</button>\n  <button type=\"reset\" class=\"btn\">Cancel</button>\n</form>\n<br>\n\n<div class=\"fileUpload btn btn-primary\">\n  Upload photo\n  <input type=\"file\" class=\"upload\" accept=\"image/*\" (change)=\"newImagePost()\"\n  #fileInput id=\"fileInput\">\n</div>\n<div class=\"form-group\" id=\"articles\">\n  <br>\n  <input class=\"search form-control\" placeholder=\"Search in posts...\"\n  (keydown)=search() [(ngModel)]=searchQuery name=\"searchQuery\" id=\"searchbar\"/>\n  <table id=\"posts\">\n    <tr *ngFor=\"let post of posts\" id={{post.id}}>\n      <td>\n        <h5>{{post.author}}</h5>\n        <div id=\"editDiv\">\n          <input type=\"text\" id=\"editInput\">\n          <button class=\"btn\" >Save Changes</button>\n        </div>\n        <img src={{post.img}} height=\"400\"\n        class=\"img-rounded\" *ngIf=\"post.img\">\n        <p>{{post.text}}</p>\n        <h6>{{post.date}}</h6>\n        <div *ngFor=\"let comment of post.comments\">\n          {{comment.author}} said: {{comment.text}}\n          <button class=\"btn btn-xs\" *ngIf=\"comment.author == user?.username\"\n          (click)=\"editComment(post.id, comment.commentId)\" id=\"editComment\">Edit</button>\n        </div>\n        <input type=\"text\" id=\"commentInput\" #commentInput>\n        <button class=\"btn\" type=\"button\" (click)=\"addComment(post.id)\">Comment</button>\n        <button class=\"btn\" type=\"button\"\n        *ngIf=\"post.author == user?.username\" (click)=\"editPost(post.id)\" id=\"editPost\">Edit</button>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article__ = __webpack_require__("../../../../../src/app/article/article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_article_service__ = __webpack_require__("../../../../../src/app/article/new-article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_service__ = __webpack_require__("../../../../../src/app/article/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleComponent = (function () {
    function ArticleComponent(http, newarticleServ, articleServ, dialog) {
        this.http = http;
        this.newarticleServ = newarticleServ;
        this.articleServ = articleServ;
        this.dialog = dialog;
        this.searchQuery = '';
        this.model = new __WEBPACK_IMPORTED_MODULE_3__article__["a" /* Article */]('', '', '', '');
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.editPost = function (id) {
        this.articleServ.editPost(id, this.posts, this.dialog, this.http);
    };
    ArticleComponent.prototype.editComment = function (pid, cid) {
        this.articleServ.editComment(pid, cid, this.posts, this.dialog, this.http);
    };
    ArticleComponent.prototype.newTextPost = function () {
        this.newarticleServ.setDate(this.model);
        this.posts.unshift({ "id": this.allPosts.length, "date": this.model.date,
            "text": this.model.post, "poster": this.user["name"] });
        $('#post').val('');
        var formData = new FormData();
        formData.append('text', this.model.post);
        this.http.post('https://webdevbackend.herokuapp.com/article', formData, { withCredentials: true }).subscribe();
    };
    ArticleComponent.prototype.search = function () {
        this.posts.filter(this.articleServ.search);
    };
    ArticleComponent.prototype.newImagePost = function () {
        if ($('#fileInput').val() != "") {
            this.newarticleServ.helperImagePost(this.fileInput, this.newarticleServ.generateImageDialog, this.dialog, this.model, this.newarticleServ, this.posts, this.user, this.http);
        }
        $("#fileInput").val("");
    };
    ArticleComponent.prototype.addComment = function (id) {
        var comment_val = this.commentInput.nativeElement.value;
        var comment = { "commenter": this.user["name"],
            "comment": comment_val };
        this.posts.filter(function (post) {
            if (post["id"] == id) {
                comment["cid"] = post["comments"].length;
                post["comments"].unshift(comment);
            }
            $("#commentInput").val('');
        });
        var link = 'https://webdevbackend.herokuapp.com/articles/' + id.toString();
        this.http.put(link, { "text": comment_val, "commentId": -1 }, { withCredentials: true }).subscribe();
    };
    return ArticleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("posts"),
    __metadata("design:type", Array)
], ArticleComponent.prototype, "posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("allPosts"),
    __metadata("design:type", Array)
], ArticleComponent.prototype, "allPosts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('imagePost'),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "imagePost", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('imageText'),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "imageText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('commentInput'),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "commentInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("user"),
    __metadata("design:type", Object)
], ArticleComponent.prototype, "user", void 0);
ArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__new_article_service__["a" /* NewArticleService */],
            __WEBPACK_IMPORTED_MODULE_5__articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__new_article_service__["a" /* NewArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__new_article_service__["a" /* NewArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__articles_service__["a" /* ArticlesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]) === "function" && _d || Object])
], ArticleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(date, post, poster, image) {
        this.date = date;
        this.post = post;
        this.poster = poster;
        this.image = image;
    }
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ "../../../../../src/app/article/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_article_dialog_edit_article_dialog_component__ = __webpack_require__("../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesService = (function () {
    function ArticlesService() {
    }
    ArticlesService.prototype.dateFilter = function (a, b) {
        //sorts so new posts are first
        var a_date = new Date(a["date"]);
        var b_date = new Date(b["date"]);
        return b_date.getTime() - a_date.getTime();
    };
    ArticlesService.prototype.search = function (post) {
        var query = $('#searchbar').val();
        if ((post["poster"].includes(query) || post["text"].includes(query)) == false) {
            $('#' + post["id"]).hide();
        }
        else {
            $('#' + post["id"]).show();
        }
    };
    ArticlesService.prototype.editPost = function (id, posts, dialog, http) {
        var post = posts.filter(function (post) {
            return post["id"] == id;
        });
        var dialogRef = dialog.open(__WEBPACK_IMPORTED_MODULE_1__edit_article_dialog_edit_article_dialog_component__["a" /* EditArticleDialogComponent */], {
            width: '400px',
            height: '400px',
            data: { name: post["0"]["poster"], text: post["0"]["text"],
                image: post["0"]["image"] }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== "undefined") {
                post["0"]["text"] = result;
                console.log(id);
                var link = "https://webdevbackend.herokuapp.com/articles/" + id.toString();
                console.log(link);
                http.put(link, { "text": result }, { withCredentials: true }).subscribe();
            }
        });
    };
    ArticlesService.prototype.editComment = function (pid, cid, posts, dialog, http) {
        var target_comment;
        posts.filter(function (post) {
            if (post["id"] == pid) {
                post["comments"].filter(function (comment) {
                    if (comment["commentId"] == cid) {
                        target_comment = comment;
                    }
                });
            }
        });
        var dialogRef = dialog.open(__WEBPACK_IMPORTED_MODULE_1__edit_article_dialog_edit_article_dialog_component__["a" /* EditArticleDialogComponent */], {
            width: '400px',
            height: '400px',
            data: { name: target_comment["author"], text: target_comment["text"],
                image: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== "undefined") {
                target_comment["text"] = result;
                var link = "https://webdevbackend.herokuapp.com/articles/" + pid.toString();
                http.put(link, { "text": result, "commentId": cid }, { withCredentials: true }).subscribe();
            }
        });
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ArticlesService);

//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n  margin-left: 2px;\n}\n\nspan {\n\tmargin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span id=\"title\">Edit</span>\n</mat-toolbar>\n<div mat-dialog-content>\n  <mat-form-field>\n    <textarea rows=\"12\" class=\"form-control\" tabindex=\"1\"\n    [(ngModel)]=\"data.text\" id=\"editText\"></textarea>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button class=\"btn\" [mat-dialog-close]=\"data.text\"\n  tabindex=\"2\" id=\"editSave\">Save Changes</button>\n  <button class=\"btn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditArticleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditArticleDialogComponent = (function () {
    function EditArticleDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditArticleDialogComponent.prototype.ngOnInit = function () {
    };
    EditArticleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return EditArticleDialogComponent;
}());
EditArticleDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-article-dialog',
        template: __webpack_require__("../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/edit-article-dialog/edit-article-dialog.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]) === "function" && _a || Object, Object])
], EditArticleDialogComponent);

var _a;
//# sourceMappingURL=edit-article-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/image-preview/image-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  text-align: center;\n  display: block;\n}\n\n.btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/image-preview/image-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span>Post Preview</span>\n</mat-toolbar>\n<br>\n<div mat-dialog-content>\n  <mat-form-field>\n    <img [src]=\"data.image\" width=\"50%\">\n    <br>\n    <input type=\"text\" tabindex=\"1\" [(ngModel)]=\"data.text\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button class=\"btn\" [mat-dialog-close]=\"data.text\" tabindex=\"2\">Post</button>\n  <button class=\"btn\" [mat-dialog-close]=\"false\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article/image-preview/image-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImagePreviewComponent = (function () {
    function ImagePreviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImagePreviewComponent.prototype.ngOnInit = function () {
    };
    ImagePreviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return ImagePreviewComponent;
}());
ImagePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-preview',
        template: __webpack_require__("../../../../../src/app/article/image-preview/image-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/image-preview/image-preview.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]) === "function" && _a || Object, Object])
], ImagePreviewComponent);

var _a;
//# sourceMappingURL=image-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/new-article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_preview_image_preview_component__ = __webpack_require__("../../../../../src/app/article/image-preview/image-preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewArticleService = (function () {
    function NewArticleService(http) {
        this.http = http;
    }
    NewArticleService.prototype.setDate = function (article) {
        var date = new Date(Date.now());
        article.date = date;
    };
    NewArticleService.prototype.helperImagePost = function (file, callback, dialog, model, service, posts, user, http) {
        var fileBrowser = file.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            var reader, newImg;
            reader = new FileReader();
            var formData_1 = new FormData();
            formData_1.append('image', fileBrowser.files[0]);
            reader.onload = function (e) {
                newImg = e.target.result;
                callback(newImg, dialog, model, service, posts, user, http, formData_1);
            };
            reader.readAsDataURL(fileBrowser.files[0]);
        }
    };
    NewArticleService.prototype.generateImageDialog = function (src, dialog, model, service, posts, user, http, formData) {
        var dialogRef = dialog.open(__WEBPACK_IMPORTED_MODULE_2__image_preview_image_preview_component__["a" /* ImagePreviewComponent */], {
            width: '400px',
            height: '420px',
            data: { image: src, text: '', post: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== "undefined") {
                service.setDate(model);
                posts.unshift({ "date": model.date,
                    "text": result, "poster": user["name"],
                    "image": src });
                formData.append('text', result);
                http.post('https://webdevbackend.herokuapp.com/article', formData, { withCredentials: true }).subscribe();
            }
        });
    };
    return NewArticleService;
}());
NewArticleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], NewArticleService);

var _a;
//# sourceMappingURL=new-article.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n}\n\n#title {\n\tmargin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span id=\"title\">Ricebook</span>\n</mat-toolbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-registration-form></app-registration-form>\n    </div>\n\n    <div class=\"col-md-6\">\n      <app-login-form></app-login-form>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
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

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login:</h1>\n<form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n  <div class=\"form-group\">\n    Username:\n    <input type=\"text\" id=\"loginUsername\" class=\"form-control\"\n    [(ngModel)]=\"model.username\" name=\"username\" pattern=\"\\w{4}\"\n    #username=\"ngModel\"\n    required>\n    <div [hidden]=\"username.valid || username.untouched\"\n    class=\"alert alert-danger\">\n      Please enter your netid\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    Password:\n    <input type=\"password\" id=\"loginPassword\" class=\"form-control\"\n    [(ngModel)]=\"model.password\" name=\"password\" pattern=\"\\w*-\\w*-\\w*\"\n    #password=\"ngModel\"\n    required>\n    <div [hidden]=\"password.valid || password.untouched\"\n    class=\"alert alert-danger\">\n      Please enter a valid password three word passphrase of the form three-word-passphrase\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn\"\n  [disabled]=\"!loginForm.form.valid\" id=\"login\">Login</button>\n</form>\n<br>\n<a href=\"https://webdevbackend.herokuapp.com/auth/facebook\" class=\"btn\">Login Using Facebook</a>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__("../../../../../src/app/auth/login-form/login.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(router, http) {
        this.router = router;
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__login__["a" /* Login */]('', '');
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.post('https://webdevbackend.herokuapp.com/login', { "username": this.model["username"],
            "password": this.model["password"] }, { withCredentials: true }).subscribe(function (data) {
            if (data['result'] == 'success') {
                _this.router.navigateByUrl('/main');
            }
        });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/auth/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], LoginFormComponent);

var _a, _b;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login-form/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterService = (function () {
    function RegisterService() {
    }
    RegisterService.prototype.checkPassword = function (model) {
        if (model.password != model.password_con) {
            return false;
        }
        return true;
    };
    RegisterService.prototype.verifyAge = function (model) {
        var dobData = model.dob.split('/');
        var dateUnparsed = new Date(Date.now());
        var yearDifference = dateUnparsed.getFullYear() - parseInt(dobData[2]);
        if (yearDifference == 18) {
            if (dateUnparsed.getMonth() - parseInt(dobData[0]) < 0) {
                return false;
            }
            else {
                if (dateUnparsed.getDate() - parseInt(dobData[1]) < 0) {
                    return false;
                }
            }
        }
        else if (yearDifference < 18) {
            return false;
        }
        return true;
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], RegisterService);

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/register.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var Register = (function () {
    function Register(account_name, display_name, email, phone, dob, zipcode, password, password_con, avatar) {
        this.account_name = account_name;
        this.display_name = display_name;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
        this.zipcode = zipcode;
        this.password = password;
        this.password_con = password_con;
        this.avatar = avatar;
    }
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/registration-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n<form (ngSubmit)=\"onSubmit()\" #registrationForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"account_name\">Account name:</label>\n    <input type=\"text\" class=\"form-control\" id=\"account_name\"\n    placeholder=\"account name\"\n    pattern=\"[a|A-z|Z]\\w*\"\n    [(ngModel)]=\"model.account_name\" name=\"account_name\"\n    #name=\"ngModel\"\n    required>\n    <div [hidden]=\"name.valid || name.untouched\" class=\"alert alert-danger\">\n      Your account name may contain capital letters, lowercase letters,\n      and numbers\tbut may not start with a number\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"display_name\">Display name:</label>\n    <input type=\"text\" class=\"form-control\" id=\"display_name\"\n    [(ngModel)]=\"model.display_name\" name=\"display_name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" class=\"form-control\" id=\"email\"\n    placeholder=\"Email address\"\n    pattern=\"(\\w*@\\w*.\\w*)\\w\"\n    [(ngModel)]=\"model.email\" name=\"email\"\n    #email=\"ngModel\"\n    required>\n    <div [hidden]=\"email.valid || email.untouched\"\n     class=\"alert alert-danger\">\n      Please enter a valid email address of the form janedoe@mail.com\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"phone\">Phone Number:</label>\n    <input type=\"text\" class=\"form-control\" id=\"phone\"\n    placeholder=\"123-456-7890\"\n    pattern=\"\\d{3}-\\d{3}-\\d{4}\"\n    [(ngModel)]=\"model.phone\" name=\"phone\"\n    #phone=\"ngModel\"\n    required>\n    <div [hidden]=\"phone.valid || email.untouched\"\n    class=\"alert alert-danger\">\n      Please enter a valid phone number of the form 123-456-7890\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"dob\">Date of birth:</label>\n    <input type=\"date\" class=\"form-control\" id=\"dob\"\n    placeholder=\"You must be 18 or older to register\"\n    [(ngModel)]=\"model.dob\" name=\"dob\"\n    required>\n    <div hidden class=\"alert alert-danger\" id=\"dob_div\">\n      You must be 18 years of age of older to register!\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"zipcode\">Zipcode:</label>\n    <input type=\"number\" class=\"form-control\" id=\"zipcode\"\n    placeholder=\"12345\"\n    pattern=\"\\d{5}\"\n    [(ngModel)]=\"model.zipcode\" name=\"zipcode\"\n    #zipcode=\"ngModel\"\n    required>\n    <div [hidden]=\"zipcode.valid || zipcode.untouched\"\n    class=\"alert alert-danger\">\n      Please enter a valid zipcode of the form 12345\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\"\n    [(ngModel)]=\"model.password\" name=\"password\"\n    required>\n    <div hidden class=\"alert alert-danger\" id=\"password_div\">\n      Passwords must match!\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password_con\">Password confirmation:</label>\n    <input type=\"password\" class=\"form-control\" id=\"password_con\"\n    [(ngModel)]=\"model.password_con\" name=\"password_con\"\n    required>\n  </div>\n\n  <button type=\"submit\" value=\"Submit\" class=\"btn btn-success\" id=\"register\"\n  [disabled]=\"!registrationForm.form.valid\">\n  Submit</button>\n</form>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/auth/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register__ = __webpack_require__("../../../../../src/app/auth/registration-form/register.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_service__ = __webpack_require__("../../../../../src/app/auth/registration-form/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(registerServ, router, http) {
        this.registerServ = registerServ;
        this.router = router;
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__register__["a" /* Register */]('', '', '', '', '', '', '', '', '');
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.onSubmit = function () {
        var password = this.registerServ.checkPassword(this.model);
        var age = this.registerServ.verifyAge(this.model);
        if (password && age) {
            console.log('about to register');
            var profile = { "username": this.model["account_name"], "email": this.model["email"],
                "phone": this.model["phone"], "zipcode": this.model["zipcode"], "dob": this.model["dob"],
                "password": this.model["password"], "password_con": this.model["password_con"],
                "display_name": this.model["display_name"] };
            this.http.post('https://webdevbackend.herokuapp.com/register', profile, { withCredentials: true }).subscribe();
            this.router.navigateByUrl('/main');
            return;
        }
        else if (!password) {
            $('#password_div').show();
        }
        else if (!age) {
            $('#dob_div').show();
        }
    };
    return RegistrationFormComponent;
}());
RegistrationFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration-form',
        template: __webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/registration-form/registration-form.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
], RegistrationFormComponent);

var _a, _b, _c;
//# sourceMappingURL=registration-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n}\n\n.container-fluid {\n\tmargin-top: 30px;\n}\n\ndiv {\n  text-align: center;\n}\n\ninput {\n  margin-bottom: 5px;\n}\n\nspan {\n  margin: auto;\n  cursor: pointer;\n}\n\n#title {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: auto;\n\t        flex: auto;\n  margin: auto;\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span routerLink=\"/profile\" id=\"profileLink\">Profile</span>\n  <div id=\"title\">Ricebook</div>\n  <span routerLink=\"/logout\" (click)=logout()>Logout</span>\n</mat-toolbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n        <div>\n          <form (ngSubmit)=follow() #followForm=\"ngForm\">\n            <input type=\"text\" [(ngModel)]=\"tempUser\" name=\"tempUser\"\n            placeholder=\"Follow someone new...\"><br>\n            <div hidden id=\"validUser\"\n             class=\"alert\">\n              This person has not signed up for RiceBook yet\n            </div>\n            <button type=\"submit\" class=\"btn\" id=\"followBtn\">Follow</button>\n          </form>\n        </div>\n          <div *ngFor=\"let follower of followers_info; let i = index\" id=\"followers\">\n            <p>{{follower.username}}</p>\n            <img src={{follower.avatar}} height=\"100\"\n            width=\"150\" class=\"img-thumbnail\">\n            <p>{{follower.headline}}</p>\n            <button class=\"btn\" (click)=unfollow(i) id={{follower.username}}>Unfollow</button>\n          </div>\n    </div>\n    <div class=\"col-md-6\">\n      <app-article [posts]=\"posts\" [allPosts]=\"allPosts\" [user]=\"user\"></app-article>\n    </div>\n    <div class=\"col-md-3\">\n      <p>{{user?.display}}</p>\n      <img src={{user?.avatar}} height=\"100\"\n      width=\"150\" class=\"img-thumbnail\" *ngIf=\"user?.avatar\">\n      <p id=\"status\">{{user?.headline}}</p>\n      <form (ngSubmit)=updateStatus() #postForm=\"ngForm\">\n        <input type=\"text\" id=\"updateStatus\"\n        [(ngModel)]=\"tempStatus\" name=\"tempStatus\"\n        placeholder=\"Update your status...\"><br>\n  \t\t\t<button type=\"submit\" class=\"btn\" id=\"updateStatusBtn\">Update</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_articles_service__ = __webpack_require__("../../../../../src/app/article/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_follower_service__ = __webpack_require__("../../../../../src/app/main/new-follower.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(http, articleServ, newFollowerServ) {
        this.http = http;
        this.articleServ = articleServ;
        this.newFollowerServ = newFollowerServ;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://webdevbackend.herokuapp.com/users').subscribe(function (data) {
            _this.users = data['profiles'];
            _this.http.get('https://webdevbackend.herokuapp.com/following', { withCredentials: true }).subscribe(function (data) {
                _this.followers = data['following'];
                _this.followers_info = _this.users.filter(function (user) {
                    var contains = _this.followers.indexOf(user['username']);
                    return contains != -1;
                });
                _this.followers_info.forEach(function (follower) {
                    var index = _this.followers.indexOf(follower['username']);
                    console.log("index ", index);
                    console.log(follower);
                    follower['index'] = index;
                });
                _this.http.get('https://webdevbackend.herokuapp.com/profile', { withCredentials: true }).subscribe(function (data) {
                    _this.user = data['profile'];
                    _this.http.get('https://webdevbackend.herokuapp.com/articles').subscribe(function (data) {
                        console.log(data['articles']);
                        _this.http.get('https://webdevbackend.herokuapp.com/profile', { withCredentials: true }).subscribe(function (data) {
                            _this.user = data['profile'];
                        });
                        _this.allPosts = data['articles'];
                        _this.posts = data['articles'];
                        _this.posts = _this.newFollowerServ.updateFollowers(_this.followers, _this.posts, _this.allPosts, _this.user);
                        _this.posts.sort(_this.articleServ.dateFilter).slice(10);
                    });
                });
            });
        });
        this.tempStatus = '';
        this.tempUser = '';
    };
    MainComponent.prototype.updateStatus = function () {
        this.user["headline"] = this.tempStatus;
        this.http.put('https://webdevbackend.herokuapp.com/headline', { 'headline': this.tempStatus }, { withCredentials: true }).subscribe();
        this.tempStatus = '';
    };
    MainComponent.prototype.unfollow = function (index) {
        var link = 'https://webdevbackend.herokuapp.com/following/' + this.followers[index];
        this.http.delete(link, { withCredentials: true }).subscribe();
        var follower = this.followers_info[index];
        var follower_index = this.followers.indexOf(follower['username']);
        this.followers.splice(follower_index, 1);
        this.followers_info.splice(index, 1);
        this.posts = this.newFollowerServ.updateFollowers(this.followers, this.posts, this.allPosts, this.user);
    };
    MainComponent.prototype.follow = function () {
        var userValue = this.tempUser;
        var new_following = this.users.filter(function (user) { return user['username'] == userValue; });
        if (new_following.length == 0) {
            $('#validUser').show();
        }
        else {
            $('#validUser').hide();
            var link = "https://webdevbackend.herokuapp.com/following/" + new_following[0]['username'];
            this.http.put(link, { 'empty': 'request' }, { withCredentials: true }).subscribe();
            console.log(this.followers);
            this.followers_info.push(new_following[0]);
            this.followers.push(this.tempUser);
            console.log(this.followers);
            this.posts = this.newFollowerServ.updateFollowers(this.followers, this.posts, this.allPosts, this.user);
            this.tempUser = '';
        }
    };
    MainComponent.prototype.logout = function () {
        this.http.put("https://webdevbackend.herokuapp.com/logout", { "empty": "request" }, { withCredentials: true }).subscribe();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__article_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_3__new_follower_service__["a" /* NewFollowerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__article_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_articles_service__["a" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__new_follower_service__["a" /* NewFollowerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__new_follower_service__["a" /* NewFollowerService */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/new-follower.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFollowerService; });
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

var NewFollowerService = (function () {
    function NewFollowerService() {
    }
    NewFollowerService.prototype.postFilter = function (follower, followers) {
        return follower["poster"] in followers;
    };
    NewFollowerService.prototype.updateFollowers = function (followers, posts, allPosts, currentUser) {
        var copy = followers;
        posts = allPosts.filter(function (post) { return copy.indexOf(post["author"]) != -1; });
        allPosts.filter(function (post) {
            if (post['author'] == currentUser["username"]) {
                posts.push(post);
            }
        });
        return posts;
    };
    return NewFollowerService;
}());
NewFollowerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NewFollowerService);

//# sourceMappingURL=new-follower.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileUpload {\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n\n.btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n}\n\n.row, h1{\n\ttext-align: center;\n}\n\nspan {\n  cursor: pointer;\n}\n\n#title {\n  margin: auto;\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span routerLink=\"/main\">Main</span>\n  <span id=\"title\">Ricebook</span>\n  <span (click)=reLogin() *ngIf=\"!auth?.merged\"> Link Profile </span>\n</mat-toolbar>\n<br>\n<!-- <a class=\"btn\" (click)=reLogin()>Link Profile by logging into your other account!</a> -->\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Current Profile Information:</h1>\n      <div>\n        <img src={{user?.avatar}}\n        height=\"100\" width=\"150\" class=\"img-thumbnail\" id=\"avatar\"><br>\n        <div class=\"fileUpload btn btn-primary\">\n          Upload photo\n          <input type=\"file\" class=\"upload\" accept=\"image/*\" (change)=\"updateAvatar()\"\n          #fileInput>\n        </div>\n      </div>\n      <div>\n        <span>Username:</span>\n        <span>{{user?.username}}</span><br>\n        <span>Display name: </span>\n        <span>{{user?.display}}</span><br>\n        <span>Email:</span>\n        <span id=\"emailDisplay\">{{user?.email}}</span><br>\n        <span>Phone number:</span>\n        <span>{{user?.phone}}</span><br>\n        <span>Zipcode:</span>\n        <span id=\"zipcodeDisplay\">{{user?.zipcode}}</span>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <h1>Update Information:</h1>\n      <form (ngSubmit)=\"onSubmit()\" #updateForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"display_name\">Display name:</label>\n          <input type=\"text\" class=\"form-control\" id=\"display_name\"\n          [(ngModel)]=\"updatedInfo.display_name\" name=\"display_name\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\"\n          placeholder=\"Email address\"\n          pattern=\"(\\w*@\\w*.\\w*)\\w\"\n          [(ngModel)]=\"updatedInfo.email\" name=\"email\"\n          #email=\"ngModel\">\n          <div [hidden]=\"email.valid || email.untouched\"\n          class=\"alert alert-danger\">\n          Please enter a valid email address of the form janedoe@mail.com\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone Number:</label>\n        <input type=\"text\" class=\"form-control\" id=\"phone\"\n        placeholder=\"123-456-7890\"\n        pattern=\"\\d{3}-\\d{3}-\\d{4}\"\n        [(ngModel)]=\"updatedInfo.phone\" name=\"phone\"\n        #phone=\"ngModel\">\n        <div [hidden]=\"phone.valid || email.untouched\"\n        class=\"alert alert-danger\">\n        Please enter a valid phone number of the form 123-456-7890\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"zipcode\">Zipcode:</label>\n      <input type=\"number\" class=\"form-control\" id=\"zipcode\"\n      placeholder=\"12345\"\n      pattern=\"\\d{5}\"\n      [(ngModel)]=\"updatedInfo.zipcode\" name=\"zipcode\"\n      #zipcode=\"ngModel\">\n      <div [hidden]=\"zipcode.valid || zipcode.untouched\"\n      class=\"alert alert-danger\">\n      Please enter a valid zipcode of the form 12345\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\"\n    [(ngModel)]=\"updatedInfo.password\" name=\"password\">\n    <div hidden class=\"alert alert-danger\" id=\"password_div\">\n      Passwords must match!\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password_con\">Password confirmation:</label>\n    <input type=\"password\" class=\"form-control\" id=\"password_con\"\n    [(ngModel)]=\"updatedInfo.password_con\" name=\"password_con\">\n  </div>\n\n  <button type=\"submit\" value=\"Submit\" class=\"btn btn-success\" id=\"submitBtn\"\n  [disabled]=\"!updateForm.form.valid\">\n  Submit</button>\n</form>\n</div>\n</div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_registration_form_register__ = __webpack_require__("../../../../../src/app/auth/registration-form/register.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
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
    function ProfileComponent(http, profileService, dialog) {
        this.http = http;
        this.profileService = profileService;
        this.dialog = dialog;
        this.updatedInfo = new __WEBPACK_IMPORTED_MODULE_3__auth_registration_form_register__["a" /* Register */]('', '', '', '', '', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://webdevbackend.herokuapp.com/profile', { withCredentials: true }).subscribe(function (data) {
            _this.user = data['profile'];
        });
        this.http.get('https://webdevbackend.herokuapp.com/user', { withCredentials: true }).subscribe(function (data) {
            console.log(data['user'][0]);
        });
    };
    ProfileComponent.prototype.onSubmit = function () {
        if (this.updatedInfo.zipcode != '') {
            this.user["zipcode"] = this.updatedInfo.zipcode;
            this.http.put('https://webdevbackend.herokuapp.com/zipcode', { "zipcode": this.updatedInfo.zipcode }, { withCredentials: true }).subscribe();
            this.updatedInfo.zipcode = '';
        }
        if (this.updatedInfo.email != '') {
            this.user["email"] = this.updatedInfo.email;
            this.http.put('https://webdevbackend.herokuapp.com/email', { "email": this.updatedInfo.email }, { withCredentials: true }).subscribe();
            this.updatedInfo.email = '';
        }
        if (this.updatedInfo.phone != '') {
            this.user["phone"] = this.updatedInfo.phone;
            this.http.put('https://webdevbackend.herokuapp.com/phone', { "phone": this.updatedInfo.phone }, { withCredentials: true }).subscribe();
            this.updatedInfo.phone = '';
        }
        if (this.updatedInfo.display_name != '') {
            this.user["display_name"] = this.updatedInfo.display_name;
            this.http.put('https://webdevbackend.herokuapp.com/display', { "display": this.updatedInfo.display_name }, { withCredentials: true }).subscribe();
            this.updatedInfo.phone = '';
        }
        if (this.updatedInfo.password != '') {
            this.http.put('https://webdevbackend.herokuapp.com/password', { password: this.updatedInfo.password }, { withCredentials: true }).subscribe();
            this.updatedInfo.password = '';
            this.updatedInfo.password_con = '';
        }
    };
    ProfileComponent.prototype.updateAvatar = function () {
        this.profileService.readFile(this.fileInput, this.profileService.generateProfileDialog, this.user, this.dialog, this.http);
    };
    ProfileComponent.prototype.reLogin = function () {
        var _this = this;
        this.http.get("https://webdevbackend.herokuapp.com/user", { withCredentials: true }).subscribe(function (data) {
            console.log('merging existing data for: ', data["user"][0]["userName"]);
            _this.http.post("https://webdevbackend.herokuapp.com/link", { user: data["user"][0]["userName"] }, { withCredentials: true }).subscribe();
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "fileInput", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_profile_pic_update_profile_pic_component__ = __webpack_require__("../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService() {
    }
    ProfileService.prototype.readFile = function (file, callback, user, dialog, http) {
        var fileBrowser = file.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            var reader, newImg;
            reader = new FileReader();
            var formData_1 = new FormData();
            formData_1.append('image', fileBrowser.files[0]);
            reader.onload = function (e) {
                newImg = e.target.result;
                callback(newImg, user, dialog, http, formData_1);
            };
            reader.readAsDataURL(fileBrowser.files[0]);
        }
    };
    ProfileService.prototype.generateProfileDialog = function (src, user, dialog, http, formData) {
        var dialogRef = dialog.open(__WEBPACK_IMPORTED_MODULE_1__update_profile_pic_update_profile_pic_component__["a" /* UpdateProfilePicComponent */], {
            width: '400px',
            height: '420px',
            data: { image: src }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== "undefined") {
                user["avatar"] = result;
                http.put('https://webdevbackend.herokuapp.com/avatars', formData, { withCredentials: true }).subscribe();
            }
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProfileService);

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  text-align: center;\n  display: block;\n}\n\n.btn {\n\tcolor: white;\n\tborder-color: #C3CAF8;\n\tbackground-color: #C3CAF8;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span>Update Profile Picture</span>\n</mat-toolbar>\n<br>\n<div mat-dialog-content>\n  <mat-form-field>\n    <img [src]=\"data.image\" width=\"50%\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button class=\"btn\" [mat-dialog-close]=\"data.image\" tabindex=\"2\">Update</button>\n  <button class=\"btn\" [mat-dialog-close]=\"false\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfilePicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UpdateProfilePicComponent = (function () {
    function UpdateProfilePicComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UpdateProfilePicComponent.prototype.ngOnInit = function () {
    };
    UpdateProfilePicComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return UpdateProfilePicComponent;
}());
UpdateProfilePicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-update-profile-pic',
        template: __webpack_require__("../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/update-profile-pic/update-profile-pic.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]) === "function" && _a || Object, Object])
], UpdateProfilePicComponent);

var _a;
//# sourceMappingURL=update-profile-pic.component.js.map

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
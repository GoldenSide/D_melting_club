(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_financing", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/financing", {
            templateUrl: "./static/financing/financing.html",
            // controller: "financingCtro"
        })
    }]);



    // app.config(["$routeProvider", function($routeProvider) {
    //     $routeProvider.when("/details/:id", {
    //         templateUrl: "./details/details.html",
    //         controller: "detailsController"
    //     });
    // }]);






})(angular);
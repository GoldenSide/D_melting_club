(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_home", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "./static/home/home.html"
        }).when("/", {
            redirectTo: "/home"
        });
    }]);

})(angular);
(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_infocenter", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/infocenter", {
            templateUrl: "./static/infocenter/infocenter.html",
            controller: "infocenter"
        })
    }]);


    app.controller("infocenter", ["$scope", function($scope) {

        $scope.flag = false;

    }])


})(angular);
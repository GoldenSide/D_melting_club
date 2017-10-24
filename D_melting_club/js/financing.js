(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_financing", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/financing/:tag?", {
            templateUrl: "./static/financing/financing.html",
            controller: "financingCtro"
        })
    }]);

    app.controller("financingCtro", ["$scope", "$http", "$route", "$routeParams", function($scope, $http, $route, $routeParams) {

        if ($routeParams.tag) {
            $('body,html').animate({ scrollTop: 1800 }, 500);
        }
        $('.header').show();
        $scope.data = {
            current: "1" // 1代表张三，2代表李四，3代表王五
        };
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
            }
        }


    }])


})(angular);
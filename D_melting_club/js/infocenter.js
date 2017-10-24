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


    app.controller("infocenter", ["$scope", "$http", function($scope, $http) {
        $('.header').hide();
        $scope.data = {
            current: "1" // 1代表张三，2代表李四，3代表王五
        };
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
            }
        }
        $http({
            method: 'get',
            url: '../static/JSON/infocenter.json',
        })

        $http.get('../static/JSON/infocenter.json').then(function(result) {
            // console.log(result.data.financing);
            // $scope.financing = result.data.financing;
            // $scope.trouble = result.data.trouble;
            $scope.financing = [];
            result.data.financing.forEach(function(v, i) {
                // console.log(v.text);
                // v.text.replace('/\r\n/g', "")
                JSON.stringify(v.text).replace(/\r\n/g, "\n")
                console.log(v.text);

                $scope.financing.push(v);

            });
            result.data.trouble.forEach(function(v, i) {
                v.text.replace('/\r\n/g', '<br/>')
            });
            // console.log(result.data.financing);
            // $scope.financing = result.data.financing;
            // $scope.trouble = result.data.trouble;
        })

        // $('.right .financing .list').on('click', 'li', function() {

        //     $(this).parent().parent().hide()
        //     $(this).data("text", $(this).html());
        // .next().show().children().eq(0).html('融资业务>' + $(this).children().eq(1).html())
        // $(".left .list-group").children().eq(1).html("融资介绍")
        //     var index = $('.right .financing .list li').index($(this));
        //     var $this = $(this);
        //     show(index, $this);
        // })

        // function show(index, $this) {
        //     $(".financing .children").eq(index).show().children().eq(0).html('融资业务>' + $this.data("text"))
        // }

        // $('.left .list-groups-item').eq(1).on("click",
        //     function() {
        //         $(this).parent().parent().next().children().eq(0).children().eq(0).show().next().hide();
        //     }
        // );


    }])



})(angular);
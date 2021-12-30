var app = angular.module("myApp", ["ngRoute"]);
            app.config(function ($routeProvider) {
                $routeProvider
                    .when("/fruit", {
                        templateUrl: "fruit.html"
                    })
                    .when("/vegetable", {
                        templateUrl: "vegetable.html",
                        
                    })
					.when("/smoothies", {
                        templateUrl: "smoothies.html",
                        
                    })
					.when("/chocolate", {
                        templateUrl: "chocolate.html",
                        
                    })
					.when("/protein-shakes", {
                        templateUrl: "protein-shakes.html",
                        
                    })
					.when("/mock-tails", {
                        templateUrl: "mock-tails.html",
                        
                    })
					.when("/winter-menu", {
                        templateUrl: "winter-menu.html",
                        
                    })
                    .when("/cart", {
                        templateUrl: "cart.html",
                        controller: "cartControl"
                    })
            });
			app.controller('mainCTR', function ($rootScope, $http) {
                $http.get("json/fruit.json").then(function (response) {
                    $rootScope.fruit = response.data;
										
                    console.log($rootScope.fruit)
                });
			
                $http.get("json/vegetable.json").then(function (response) {
                    $rootScope.vegetable = response.data;					
                    console.log($rootScope.vegetable)
                });
				$http.get("json/chocolate.json").then(function (response) {
                    $rootScope.chocolate = response.data;					
                    console.log($rootScope.chocolate)
                });
				$http.get("json/smoothies.json").then(function (response) {
                    $rootScope.smoothies = response.data;					
                    console.log($rootScope.smoothies)
                });
				$http.get("json/protein-shakes.json").then(function (response) {
                    $rootScope.protein = response.data;					
                    console.log($rootScope.protein)
                });
				$http.get("json/winter-menu.json").then(function (response) {
                    $rootScope.winter = response.data;					
                    console.log($rootScope.winter)
                });
				$http.get("json/mock-tails.json").then(function (response) {
                    $rootScope.mocktail = response.data;					
                    console.log($rootScope.mocktail)
                });
                $rootScope.cart = [];
                $rootScope.total = 0;
		});
        app.controller("mainCRT", function ($scope, $rootScope) {
            $scope.addCart = function (id) {
                var item = $rootScope.fruit[id];
        
                for (var i = 0; i < $rootScope.cart.length; ++i) {
                    if ($rootScope.cart[i].id == id) {
                        $rootScope.cart[i].qty++;
                        $rootScope.total += $rootScope.cart[i].Price
                        return;
                    }
                }
        
        
                var newEle = {
                    "id": id,
                    "Name": item.Name,
                    "Price": item.Price,
                    "qty": 1
                }
                $rootScope.total += item.Price
                $rootScope.cart.push(newEle);
                console.log($rootScope.cart)
            }
        });
        app.controller("cartControl", function ($scope, $rootScope) {

            $scope.isShow = false;
            $scope.removeAll = function () {
                $rootScope.total = 0
                $rootScope.cart = [];
            }
        
            $scope.checkout = function () {
                if ($rootScope.cart.length > 0) {
                    $scope.isShow = true;
                }
                else {
                    $scope.isShow = false;
                }
            }
        
            $scope.thank = function () {
                alert("Thanks for your order !");
                $scope.isShow = false;
                $rootScope.total = 0
                $rootScope.cart = [];
            }
        });
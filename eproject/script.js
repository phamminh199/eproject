var app = angular.module("myApp", ["ngRoute"]);
            app.config(function ($routeProvider) {
                $routeProvider
                    .when("/fruit", {
                        templateUrl: "fruit.html",
                        
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
                        
                    })
            });
            app.run( function ($rootScope, $http){
                $http.get("shrek.json").then(function (response){
                    $rootScope.menu = response.data;
                    console.log($rootScope.menu);
                   
                });
                $rootScope.cart = [];
                $rootScope.total = 0;
                
            });
			
                		                		
        app.controller("productcontroll", function ($scope, $rootScope) {
            
            $scope.addCart = function (id) {
                var item =  $rootScope.menu.fruit[id];
                
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
                $rootScope.total += item.price
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
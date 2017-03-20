

var app1 = angular.module('d3App',[])
        .controller('myController', function($scope,$http){
          $scope.data = [];
          $http.get('opsMetrics.json').success(function(resp){
            $scope.data = resp;
            console.log($scope.data);
          });
          $http.get('businessMetrics.json').success(function(resp1){
            $scope.data1 = resp1;
            console.log($scope.data1);
             });
          $http.get('businessMetrics_info.json').success(function(resp2){
            $scope.data2 = resp2;
            console.log($scope.data2);
             });
        });



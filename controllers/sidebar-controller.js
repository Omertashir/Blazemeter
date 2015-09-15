'use strict';
(function(){
    angular.module('sidebar-module')
        .controller('sidebar-controller', function($scope, $http, $locale){
            $scope.refresh = function(){
                $http.get('../sidebar.json')
                .then(function(result){
                    $scope.reports = result.data;
                });
            };
            $scope.TimeFormat = $locale.DATETIME_FORMATS.shortTime;
            $scope.OpenSidebar = true;
            $scope.sort_order = '-updated';
            $scope.odd_class = 'odd_div'
        });
})();
angular.module('PropertyCross')
    .controller('SearchController', function($scope, $rootScope, $state, $http, SearchService) {
        $scope.searchText = '';
        $scope.search = function() {
            $rootScope.overlay = true;
            SearchService
                .search($scope.searchText)
                .then(function (response) {
                    $state.go('results');
                }, function(reason) {
                    console.error('There was a problem with your search.');
                    $scope.error = 'There was a problem with your search.';
                })
                .finally(function() {
                    $rootScope.overlay = false;
                });
        }
    })
    .controller('ResultController', function($scope, $state, SearchService) {
        $scope.data = SearchService.getData();
    })
    .controller('PropertyController', function($scope, $stateParams, SearchService) {
        $scope.property = SearchService.getProperty($stateParams.id)
    });
